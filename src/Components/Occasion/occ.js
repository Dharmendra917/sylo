import 'remixicon/fonts/remixicon.css'
import './occ.css'
import React from 'react'
import Card from './card'

const card1 = {
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Birthdays",
}
const card2 = {
    image: "https://images.unsplash.com/photo-1625556279481-7294acc15259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    title: "Anniversaries",
}
const card3 = {
    image: "https://images.unsplash.com/photo-1597145757859-6464636ad735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    title: "Bride to be",
}
const card4 = {
    image: "https://images.unsplash.com/photo-1525328302834-764f32276842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    title: "Proposal",
}
const card5 = {
    image: "https://images.unsplash.com/photo-1562494832-962bb1c8d4e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    title: "Baby Showers",
}
const card6 = {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Graduations",
}
const card7 = {
    image: "https://images.unsplash.com/photo-1509518408633-d42f618a2bdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Break up",
}
const card8 = {
    image: "https://images.unsplash.com/photo-1529268209110-62be1d87fe75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Farewell",
}
const card9 = {
    image: "https://images.unsplash.com/photo-1485872299829-c673f5194813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2054&q=80",
    title: "Kitty Party",
}
const card10 = {
    image: "https://images.unsplash.com/photo-1529519195486-16945f0fb37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    title: "Engagement",
}


const Occasion = () => {
    return (
        <>
            <h2>Hey, What's Your Occasion?</h2>
            <div className="cards">
                <Card className="card" image={card1.image} title={card1.title} />
                <Card className="card" image={card2.image} title={card2.title} />
                <Card className="card" image={card3.image} title={card3.title} />
                <Card className="card" image={card4.image} title={card4.title} />
                <Card className="card" image={card5.image} title={card5.title} />
                <Card className="card" image={card6.image} title={card6.title} />
                <Card className="card" image={card7.image} title={card7.title} />
                <Card className="card" image={card8.image} title={card8.title} />
                <Card className="card" image={card9.image} title={card9.title} />
                <Card className="card" image={card10.image} title={card10.title} />
            </div>
        </>
    );
}

export default Occasion;
