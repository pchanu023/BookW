document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button'),
        searchClose = document.getElementById('search-close'),
        searchContent = document.getElementById('search-content');

    if (searchButton) {
        searchButton.addEventListener('click', () => {
            searchContent.classList.add('show-search');
        });
    }

    if (searchClose) {
        searchClose.addEventListener('click', () => {
            searchContent.classList.remove('show-search');
        });
    }





    const loginButton = document.getElementById('login-button'),
        loginClose = document.getElementById('login-close'),
        loginContent = document.getElementById('login-content');

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            loginContent.classList.add('show-login');
        });
    }

    if (loginClose) {
        loginClose.addEventListener('click', () => {
            loginContent.classList.remove('show-login');
        });
    }
});


const shadowHeader =() =>{
    const header =document.getElementById('header')

    this.scrollY >= 50 
    ? header.classList.add('shadow-header') 
    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)


let swiperHome = new Swiper('.home_swiper', {
    loop: true,
    spaceBetween: -185,
    grabCursor: true,
    slidesPerView: 'auto', // แก้ไขจาก slidePerView
    centeredSlides: 'true', // แก้ไขจาก 'auto'

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1220: {
            spaceBetween: -245,
        },
    },
});


let swiperFeatured = new Swiper('.featured_swiper', {
    loop: true,
    spaceBetween: 16,  // เพิ่มระยะห่างระหว่างสไลด์
    grabCursor: true,
    slidesPerView: 'auto', // เริ่มต้นจะเป็นแบบอัตโนมัติ
    centeredSlides: 'auto', // ถ้าไม่ต้องการให้สไลด์ตรงกลางตั้งค่าที่นี่
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1150: {
            slidesPerView: 4, // จำนวนสไลด์ที่แสดง
            centeredSlides: false, // ปิดการแสดงสไลด์ตรงกลาง
            spaceBetween: 16, // ระยะห่างระหว่างสไลด์
        },
        768: {
            slidesPerView: 3, // แสดง 3 เล่มในหน้าจอขนาดกลาง
            spaceBetween: 16,
        },
        480: {
            slidesPerView: 1, // แสดง 1 เล่มในหน้าจอขนาดเล็ก
            spaceBetween: 8,
        }
    }
});



let swiperNew = new Swiper('.new_swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto', 

    breakpoints: {
        1150: {
            slidesPerView: 3,
        },
    },
});


let swiperTestimonial = new Swiper('.testimonial_swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto', // แก้ไขจาก slidePerView
    centeredSlides: 'auto', // แก้ไขจาก 'auto'

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        },
    },
});


const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll')
}

const section = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    section.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 20,
              sectionID = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav_menu a[href*=' + sectionID + ']')

        if (sectionClass) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionClass.classList.add('active-link')
            } else {
                sectionClass.classList.remove('active-link')
            }
        }
    })
}

window.addEventListener('scroll', scrollUp)
window.addEventListener('scroll', scrollActive)


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
})

sr.reveal('.home_data ,.featured_container ,.new_container,.join_data,.testimonial_container ,.footer')
sr.reveal('.home_images',{delay:600})
sr.reveal('.services_card',{interval:100})
sr.reveal('.discount_data',{origin:'left'})
sr.reveal('.discount_images',{origin:'right'})


