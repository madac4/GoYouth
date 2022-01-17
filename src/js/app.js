import * as flsFunctions from './modules/functions.js'
import Ellipsis from 'ellipsis.js'
flsFunctions.isWebp();

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu-header');
    if (burger) {
        flsFunctions.burger(burger, menu);
    }


    if (flsFunctions.isMobile.any()) {
        document.body.classList.add('_touch');
        const submenuItems = document.querySelectorAll('.menu-header__item--submenu');

        if (submenuItems.length > 0) {
            for (let i = 0; i < submenuItems.length; i++) {
                const submenuItem = submenuItems[i]
                submenuItem.id = `submenu-${i}`;
                submenuItem.addEventListener('click', (e) => {
                    if (e.target.parentNode == submenuItem) {
                        submenuItem.classList.toggle('open');
                    }
                    const currentMenuItem = e.target.parentNode.id;
                    if (e.target.parentNode.id) {
                        submenuHandler(currentMenuItem);
                    }
                })
            }
        }

        const submenuHandler = (itemId) => {
            submenuItems.forEach(submenu => {
                submenu.classList.remove('open')
            })
            document.querySelector(`.menu-header__item--submenu#${itemId}`).classList.add('open');
        }
    } else {
        document.body.classList.add('_pc');
    }


    Ellipsis({
        ellipsis: '…',
        responsive: true,
        className: '.article-horizontal__title',
        lines: 1,
    });

    Ellipsis({
        ellipsis: '…',
        responsive: true,
        className: '.article-horizontal__text',
        lines: 4,
    });

    Ellipsis({
        ellipsis: '…',
        responsive: true,
        className: '.article-vertical__title',
        lines: 1,
    });

    Ellipsis({
        ellipsis: '…',
        responsive: true,
        className: '.article-vertical__text',
        lines: 4,
    });

    const tabs = document.querySelector('.tabs');
    const tabsButtons = document.querySelectorAll('.tabs__button');
    const tabsContents = document.querySelectorAll('.tabs__content');
    const tabsImages = document.querySelectorAll('.tabs__image');

    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('tabs__button')) {
                const tabsPath = e.target.dataset.tabsPath;
                tabsHandler(tabsPath);
            }
        })
    }

    const tabsHandler = (path) => {
        tabsButtons.forEach(button => {
            button.classList.remove('tabs__button--active')
        })
        document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs__button--active');

        tabsContents.forEach(content => {
            content.classList.remove('tabs__content--active')
        })
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');

        tabsImages.forEach(image => {
            image.classList.remove('tabs__image--active')
        })
        document.querySelector(`.tabs__image[data-tabs-target="${path}"]`).classList.add('tabs__image--active');
    }

    const megaTabsControl = document.querySelector('.megatabs-control');
    const megaTabsFooter = document.querySelector('.megatabs-footer');
    const megaTabsButtons = document.querySelectorAll('.megatabs__button');
    const megaTabsContents = document.querySelectorAll('.megatabs-body__slide');
    const currentTab = document.querySelector('.megatabs-control .current');
    const allTabs = document.querySelector('.megatabs-control .full');

    if (megaTabsButtons) {
        for (let i = 0; i < megaTabsButtons.length; i++) {
            megaTabsButtons[i].addEventListener('click', () => {
                megaTabsHandler(i)
                currentTab.innerHTML = i + 1;
            })
        }

        megaTabsControl.addEventListener('click', (e) => {
            if (e.target.classList.contains('megatabs-control__arrow--prev')) {
                let activeButton = document.querySelector('.megatabs__button--active');
                if (activeButton.previousElementSibling !== null) {
                    activeButton.classList.remove('megatabs__button--active');
                    activeButton.previousElementSibling.classList.add('megatabs__button--active');
                }

                let allButtons = activeButton.parentNode.querySelectorAll('li');
                for (let i = 0; i < allButtons.length; i++) {
                    if (allButtons[i].classList.contains('megatabs__button--active')) {
                        currentTab.innerHTML = ++i;
                    }
                }

                let activeContent = document.querySelector('.megatabs__slide--active');
                if (activeContent.previousElementSibling !== null) {
                    activeContent.classList.remove('megatabs__slide--active');
                    activeContent.previousElementSibling.classList.add('megatabs__slide--active');
                }
            }

            if (e.target.classList.contains('megatabs-control__arrow--next')) {
                let activeButton = document.querySelector('.megatabs__button--active');
                if (activeButton.nextElementSibling !== null) {
                    activeButton.classList.remove('megatabs__button--active');
                    activeButton.nextElementSibling.classList.add('megatabs__button--active');
                }

                let allButtons = activeButton.parentNode.querySelectorAll('li');
                for (let i = 0; i < allButtons.length; i++) {
                    if (allButtons[i].classList.contains('megatabs__button--active')) {
                        currentTab.innerHTML = ++i;
                    }
                }

                let activeContent = document.querySelector('.megatabs__slide--active');
                if (activeContent.nextElementSibling !== null) {
                    activeContent.classList.remove('megatabs__slide--active');
                    activeContent.nextElementSibling.classList.add('megatabs__slide--active');
                }
            }
        })

        megaTabsFooter.addEventListener('click', (e) => {
            if (e.target.classList.contains('megatabs-footer__arrow--prev')) {
                let activeButton = document.querySelector('.megatabs__button--active');

                let allButtons = activeButton.parentNode.querySelectorAll('li');
                for (let i = 0; i < allButtons.length; i++) {
                    if (allButtons[i].classList.contains('megatabs__button--active')) {
                        currentTab.innerHTML = i;
                    }
                }

                if (activeButton.previousElementSibling !== null) {
                    activeButton.classList.remove('megatabs__button--active');
                    activeButton.previousElementSibling.classList.add('megatabs__button--active');
                }

                let activeContent = document.querySelector('.megatabs__slide--active');
                if (activeContent.previousElementSibling !== null) {
                    activeContent.classList.remove('megatabs__slide--active');
                    activeContent.previousElementSibling.classList.add('megatabs__slide--active');
                }
            }

            if (e.target.classList.contains('megatabs-footer__arrow--next')) {
                let activeButton = document.querySelector('.megatabs__button--active');
                if (activeButton.nextElementSibling !== null) {
                    activeButton.classList.remove('megatabs__button--active');
                    activeButton.nextElementSibling.classList.add('megatabs__button--active');
                }

                let allButtons = activeButton.parentNode.querySelectorAll('li');
                for (let i = 0; i < allButtons.length; i++) {
                    if (allButtons[i].classList.contains('megatabs__button--active')) {
                        currentTab.innerHTML = ++i;
                    }
                }

                let activeContent = document.querySelector('.megatabs__slide--active');
                if (activeContent.nextElementSibling !== null) {
                    activeContent.classList.remove('megatabs__slide--active');
                    activeContent.nextElementSibling.classList.add('megatabs__slide--active');
                }
            }
        })

        allTabs.innerHTML = megaTabsContents.length;
    }

    const megaTabsHandler = (order) => {
        megaTabsButtons.forEach(button => {
            button.classList.remove('megatabs__button--active')
        })
        megaTabsButtons[order].classList.add('megatabs__button--active');

        megaTabsContents.forEach(content => {
            content.classList.remove('megatabs__slide--active')
        })
        megaTabsContents[order].classList.add('megatabs__slide--active');
    }

})

const mainArticles = document.querySelector('.main-about__articles .main-articles__article');
const mainArticlesParent = document.querySelector('.main-about__articles');

if (mainArticlesParent) {
    const articleArea = mainArticles.scrollHeight * 3;
    mainArticlesParent.style.maxHeight = `${articleArea}px`;
    mainArticlesParent.style.overflow = `auto`;
}