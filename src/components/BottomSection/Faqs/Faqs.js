import React, {Component} from 'react'
import {Accordion, Card} from "react-bootstrap";

export default class Faqs extends Component {
    constructor(props) {
        super(props);
        this.state = { isActive : [] } ;
        this.toggleClass = this.toggleClass
    }

    toggleClass = (e) => {
        let temp = []
        temp[e] = !temp[e]
        this.setState({
            isActive: temp
        })
    }

    render() {
        let languageManager = this.props.languageManager();
        return (
            <section className="faqs" id="faq">
                <div className="container">
                    <div className="faqs-inner">
                        <h3 id="faq">
                            {languageManager.faqsTitle}
                        </h3>

                        <div className="panel-group" id="accordion">
                            <Accordion defaultActiveKey="0">
                                {
                                    languageManager.faqsList.map( (item, index) => {
                                        return(
                                            <Card className="panel panel-default" key={index}>
                                                <Accordion.Toggle as={Card.Header}
                                                                  eventKey={index}
                                                                  className={(this.state.isActive[index]) ? 'active' : 'non-active'}
                                                                  onClick={()=>this.toggleClass(index)}>
                                                    <h4 className="panel-title">
                                                        <a data-toggle="collapse" className="collapsed">
                                                            {item.title}
                                                        </a>
                                                    </h4>
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey={index} className="panel-collapse">
                                                    <Card.Body className="panel-body">
                                                        <p>
                                                            {item.descr}
                                                        </p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        )
                                    })
                                }
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}