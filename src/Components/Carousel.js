import React from 'react';
import Container from 'react-bootstrap/Container';

import Card from '../Components/Card';
import EducAR from '../assets/images/EducAR.jpg';
import Aeroplane from '../assets/images/Aeroplane.jpg';
import blog from '../assets/images/blog.jpg';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items: [
                {
                    id:0,
                    title: 'EducAR',
                    subTitle: 'An augmented reality filter for kids to learn',
                    imgSrc: EducAR,
                    link: 'https://www.instagram.com/ar/510011979710891/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Aeroplane',
                    subTitle: 'An AR model (works on a smart phone).',
                    imgSrc: Aeroplane,
                    link: 'https://www.instagram.com/ar/736584443741960/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'My blogs',
                    subTitle: 'These are my blogs',
                    imgSrc: blog,
                    link: 'https://www.blogger.com/profile/07910667931462923978',
                    selected: false
                }
            ]

        }
    }

    handleCardClick = (id, card) => {
        
        let items= [...this.state.items];

        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id){
                item.selected= false;
            }
        });
        this.setState=({
                items
            });
        console.log(items[id].selected);
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id,e))} key={item.id} />
        }
        )
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}
export default Carousel;