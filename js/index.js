let homescroll = window.pageYOffset
window.addEventListener('scroll', function () {
    let nowscroll = window.pageYOffset
    if (homescroll > nowscroll) {
        document.querySelector('.navbar').classList.remove('nav-scroll')
    } else {
        document.querySelector('.navbar').classList.add('nav-scroll')
    }
    homescroll = nowscroll
})



const a = ['Equity Planning', 'Lorem Financing', 'Wealth Management']
function aa() {
    let i = 0

    setInterval(() => {
        i++
        if (i > 2) {
            i = 0
        }
        $('.run_text>span').text(a[i])
    }, 4000);
}
aa()


const fold_data = [
    {
        id: '1',
        title: 'Discover how much its worth',
        text: 'Track your portfolio and its value while finding the best ways to reduce your tax bill with our calculators.',
        link: 'aaaaaa aaaaa',
    },
    {
        id: '2',
        title: 'Make a plan thats right for you',
        text: 'Exercise now or later? Sell on the secondary market or through a tender offer? Compare costs, risks, and potential gains.',
        link: 'bbbbbbbbb',
    },
    {
        id: '3',
        title: 'Align your equity with your financial goals',
        text: 'Build a plan for home ownership, retirement, your kid’s education, passion projects, or whatever’s important to you. ',
        link: 'cccccc cccccc',
    },
    {
        id: '4',
        title: 'Choose how to fund your exercise cost',
        text: 'Think your companys got potential and want a piece of the pie? See how you can exercise without paying out of pocket.',
        link: 'ddd dddddd',
    },
]

let currentflodindex = 0;
var checktime

function fold_a(flod_index) {
    const fold_text = $('.fold-text')
    const fold_wire = $('.fold-wire')
    const fold_title = $('.fold-title')

    fold_text.each(function (index) {
        $(this).toggleClass('active', flod_index === index)
    })
    fold_wire.each(function (index) {
        $(this).toggleClass('active', flod_index === index)
    })
    fold_title.each(function (index) {
        $(this).toggleClass('active', flod_index === index)
    })
    $('.fold-img').each(function (index) {
        $(this).attr('src', './img/v.png',)
        if (flod_index === index) {
            $(this).attr('src', './img/v2.png',)
        }
    })

    currentflodindex = flod_index
    clearTimeout(checktime);
    setCheckTime()

}
function setCheckTime() {
    checktime = setTimeout(() => {
        currentflodindex = (currentflodindex + 1) % fold_data.length
        fold_a(currentflodindex)
    }, 5000);
}

function fold_print() {
    $('.fold-box').html('')
    $.each(fold_data, (index, item) => {
        $('.fold-box').append(`
        <div class="mb-5">
            <div class="d-flex  pb-3 fold-title " onclick="fold_a(${index})">
                <h4>${item.title}</h4>
                <img src="./img/v.png" alt="" class="fold-img">
            </div>
            <div class="fold-text">
                <p>${item.text}</p>
                <a href="" class="fold-link">${item.link}</a>
            </div>
            <div class="fold-wire"></div>
        </div>
        `)
    })
}
fold_print()
fold_a(0)
setCheckTime()


const card_data = [
    {
        subtitle: 'Always free',
        title: 'Equity Planning',
        text: 'Compare stock option exercise, sell, and timing strategies to make the right decisions.',
        btn: 'adectffes',
        a: 'cet dddddd',
        li1: 'Current and future equity value',
        li2: 'Costs to exercise your equity',
        li3: 'Impact of taxes on potential gains',
    },
    {
        subtitle: 'Fee only',
        title: 'Wealth Management',
        text: 'Financial planning and investment that align your startup stock with your financial goals.',
        btn: 'csthced',
        a: 'sdfedh',
        li1: 'Equity built into your financial plan',
        li2: 'Access to curated investments',
        li3: 'Get personalized advice from humans not robots',
    },
    {
        subtitle: 'Cash advance fee',
        title: 'Financing',
        text: 'Own your shares² without draining your savings, or get liquidity from your shares without selling.',
        btn: 'desder',
        a: 'exescse',
        li1: 'Covers exercise and potential taxes',
        li2: 'Repay if/when there is an e',
        li3: 'No prepayment penalties',
    },
]

$.each(card_data, (index, item) => {
    $('.card-box').append(`
    <div class="col">
        <div class="card card1 text-light p-4">
            <div class="card-body">
                <div>
                    <h5 class="card-subtitle">
                        ${item.subtitle}
                    </h5>
                    <h1 class="card-title my-3">
                        ${item.title}
                    </h1>
                </div>
                <div class="card-coll">
                    <div class="card-text mb-5 fs-6">
                        ${item.text}
                    </div>
                    <div class="my-4 d-flex justify-content-center align-items-center">
                        <a href="" class="btn btn-outline-secondary text-light card-btn fs-5">${item.btn}</a>
                    </div>
                    <div class="mb-5 d-flex justify-content-center align-items-center ">
                        <a href="" class="text-light fs-5">${item.a}</a>
                    </div>
                    <div>
                        <ul class="card-ul">
                            <li class="mb-3 fs-5">${item.li1}</li>
                            <li class="mb-3 fs-5">${item.li2}</li>
                            <li class="fs-5">${item.li3}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)
})
function card1_click() {
    var window_width = $(window).width()
    if (window_width <= 1080) {
        $('.card1').append(`
            <img src="./img/v.png" alt="" class="card1-v" >
        `)
        $('.card1').click(function () {
            $(this).toggleClass('card1-click')
            $(this).find('.card-coll').toggleClass('card-coll-click')
            $(this).find('.card1-v').toggleClass('card1-v2')
        })
    }else{
        $('.card1-v').remove()
    }
}
card1_click()


var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    dots: false,
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
});

let s = 0

$('.robot-btn').click(() => {
    $('.robot').toggleClass('active')
    if (s === 0) {
        $('.robot-btn>img').attr('src', './img/叉叉.png')
        s = 1
    } else {
        s = 0
        $('.robot-btn>img').attr('src', './img/line.png')
    }
})

$('.robot-submit').click(() => {
    if ($('.robot-input').val() === '') {
        return
    }
    $('.robot-body').append(`
    <div class="d-flex justify-content-end ps-5">
        <span class="robot-messages2">${$('.robot-input').val()}</span>
    </div>
    `)

    setTimeout(() => {
        $('.robot-body').append(`
    <div class="d-flex">
        <div class="robot-img text-dark fs-3">S</div>
        <div class="d-flex flex-column mt-4 align-items-start">
            <span class="robot-messages">Hi there!</span>
            <span class="robot-messages">I dont link help</span>
        </div>
    </div>
    `)
        $('.robot-body').scrollTop('1000000000000000')
    }, 1000);
    $('.robot-input').val('')
})
$('.robot-input').on('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault()
        $('.robot-submit').click()
    }
})