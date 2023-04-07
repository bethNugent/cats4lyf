# Week 06 - Catz-4-Lyf Adoption Agency

**Authors:**
 - Elizabeth Nugent
 - Miguel Acevedo 
 - Craig Doherty
 - Peter Matthews

This repository contains our submission for the [Master Coding](https://wearecodenation.com/2022/04/25/master-coding/) course at *CodeNation*.

## Brief

Create an eCommerce site where you can buy cats!

### Requirements

 - Display page of products (cats) with images
 - Cat images coming from an API (https://thecatapi.com/)
 - The ability to add each product (cat) to the basket.
 - Use fake data for prices, location, info etc from (https://www.npmjs.com/package/@faker-js/faker)
 - Calculate total price of the items (cats) in the basket.
 - Basket needs to be a side panel/modal that is displayed when you press the basket button.
 - Use GitHub collaboration with branching to work as a team.

### Stretch Goals

 - Use React Router to create ‘about’ pages for each product (cat)
 - A checkout where you can buy the items in the basket.

 ## Implementation

For this project, we had a very clear understanding about what needed to be done, from the outset. It didn't take long for each person to grab a portion of the project, and run with it. This project builds on the skills, and exercises we have done during the early part of the week, and allowed us to fit each skill together, into a functioning website.

We wanted to achieve each requirement, and stretch goal. So, to that end, we have produced a four page React application. The landing page helps to establish the website, and makes it look more professional. The *cat*alogue page calls out to the Cats API, and returns 12 random cats, which are displayed on the page. When the user clicks one of these images, a modal form displays details, and allows them to add the cat to a basket, ready for adoption.

We have used `localStorage` as a persistence medium within this project, to simulate items being added to table in a database that would make up the cart for the single transaction. Once cats have been added to the basket, the user can see their details on the checkout page, and make a donation for each cat. The total donation is calculated at the bottom of the form, and the user can simulate the transation by clicking Checkout.

We have used Faker to generate the names and ages of the cats, but we have used the extended version of the API, to gether real-world information about the breed of the cat in the photo that is sent back.
 
 ## Retrospective

 Each individual aspect of this project was not difficult in-and-of itself. Bringing third-party data into the app, via a fetch request; working asyncronously, with async/await; persisting data in the `localStorage`; routing between pages; and, creating modal displays. However, we did feel that the project was on a small-enough scale that it was easy to trip over eachother, while working on different branches. We hit a few merge conflicts with dependencies, that had a cascading effect when other branches were needed to be merged in. The conflict kept recurring. We did eventually manage to resolve this, but syncronisation issues seemed to slow the process down, a lot.