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
        lines: 2,
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
})