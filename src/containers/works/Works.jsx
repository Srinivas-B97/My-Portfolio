import React from 'react'
import { Work } from '../../components'
import './works.css'

//Images
import BookLending from '../../assets/projects/BookLending.png'
import ProfileApp from '../../assets/projects/Home.png'
import ExpenseTracker from '../../assets/projects/expense-tracker.png'
import Poster from '../../assets/projects/eranadan_thakkaram_2.jpg'

function Works() {
    return (
        <div className='works section-margin' id='works'>
            <h1 className='gradient-text'>Portfolio</h1>
            <h3>Check Out Some of My Projects.</h3>
            <div className='works-container'>
                <Work image={BookLending} title="Book Lending" subTitle="Web Development" text="Book Lender: Rent/Buy Book Online is a user-friendly platform for renting or purchasing books. It features easy book searches, rental options, and affordable monthly subscriptions. The design is intuitive, offering seamless navigation and access to free books and personalized deals, catering to a wide range of readers." link="https://www.figma.com/design/b9sFD77ZUiL5Mvh8eBtVns/Book-Lending?node-id=0-1&t=mPLHP7KMJkHQUlHQ-1" />

                <Work image={ProfileApp} title="Profile App" subTitle="UI/UX Design" text="This is a simple profile app design created for the React,js Bootcamp Held at EMEA College organised by TinkerHub EMEA. This was designed to give the participants a task for development." link="https://www.figma.com/design/2eslJ8DtsDOBT1iftFvMcK/Profile-App?t=pO4HwGpjqcU1d6Hi-0" />

            </div>
        </div>
    )
}

export default Works
