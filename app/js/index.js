'use strict';

// burger button start


    const burger = document.querySelector('.hamburger'),
        rightBlock = document.querySelector('.right'),
        leftBlock = document.querySelector('.left');
        let getHeight = (x) => {
            let sum = 0;
            for (let i = 0; i < x.childNodes.length; i++) {
                sum = sum + x.childNodes[i].clientHeight;
            }
            return sum
        }

    
    var hh = getHeight(rightBlock);

    window.addEventListener('resize', () => {
        let ww = window.innerWidth;
        hh = getHeight(rightBlock);
        leftBlock.style.height = hh + 'px';
        if (ww > 768) {
            leftBlock.classList.remove('left_open');
            burger.classList.remove('is-active');
        }
    })

    burger.addEventListener('click', () => {
        let check = burger.classList.contains('is-active');
        let check2 = leftBlock.classList.contains('left_open');
        if (check && check2) {
            leftBlock.classList.remove('left_open');
            burger.classList.remove('is-active');
        } else {
            leftBlock.classList.add('left_open');
            leftBlock.style.height = hh + 'px';
            burger.classList.add('is-active');
        }
    });

    // burger button end validation start
    const ids = document.querySelectorAll('.card__id');
    const holder = document.querySelector('.card__holder');
    const code = document.querySelector('.card__code');
    const btn = document.querySelector('.card__form .btn');

    let isHolderValid = (value) =>{
        return value && value.trim().length >= 4 && /^[a-zA-Z ]+$/.test(value);
    }
    let isIdValid = (value) =>{
        return value && value.trim().length == 4 && /^[0-9]+$/.test(value);
    }
    let isCodeValid = (value) =>{
        return value && value.trim().length == 3 && /^[0-9]+$/.test(value);
    }
    
    let checkIds = [false,false,false,false],
     checkHolder = false,
     checkCode = false;

     ids.forEach((elem, i) => {
        elem.addEventListener('input', () => {
            isIdValid(elem.value) ? 
                elem.classList.contains('invalid') ? (
                    elem.classList.remove('invalid'),
                    checkIds[i] = true
                ) : null
                : (elem.classList.add('invalid'),
                    checkIds[i] = false
            );
        })
    })
    holder.addEventListener('input', () => {
       isHolderValid(holder.value) ?
            holder.classList.contains('invalid') ? (
                holder.classList.remove('invalid'),
                checkHolder = true
            ) : null
            : (holder.classList.add('invalid'),
                checkHolder = false
        );
    })
    code.addEventListener('input', () => {
       isCodeValid(code.value) ?
            code.classList.contains('invalid') ? (
                code.classList.remove('invalid'),
                checkCode = true
            ) : null
            : (
                code.classList.add('invalid'),
                checkCode = false
        );
    })
    
    btn.addEventListener('click', (e)=>{
        let sumCheckIds = checkIds.reduce((sum, current)=>{
            return sum && current;
        });
        (sumCheckIds && checkCode && checkHolder) ? null : e.preventDefault();;
    })
    // validation end