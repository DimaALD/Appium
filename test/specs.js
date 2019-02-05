const chai = require('chai')
const {browser,$,element,by} = require('protractor')
const expect = chai.expect
describe('get title', ()=>{
    it('get oz.by title',async ()=>{
        browser.get('https://oz.by/')
       let title = await browser.getTitle()
        expect(title).to.be.equal('OZ.by — интернет-магазин. Книги, игры, косметика, товары для дома, творчества, подарки, техника. Доставка по Беларуси.')
    }),
     it('find book',async ()=>{
        browser.get('https://oz.by/')
        await $('input#top-s').sendKeys('10406561')
        await $('.top-panel__search__btn').click()
        const bookName = $('.b-product-title__art').getText()
        expect(await bookName).to.include('10406561')
    })
    it('click on book category and check title', async () => {
        browser.get('https://oz.by/')
        await $('#main-menu-opener').click()
        await $("li.main-menu__list-item a[href = '/books/'").click()
        await $('.landing-nav-list__content').click()
        expect(await browser.getTitle()).to.include('Книги бестселлеры')

    })
})