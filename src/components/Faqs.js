import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFaqs } from '../redux/actions/faqActions';

const Faqs = (props) => {
    const { faqs, fetchFaqs, style, firstItemOpened } = props;
    let accordionStyle = style ? style : 'style2';
    let isActive = firstItemOpened ? 'active' : '';
    useEffect(() => {
        fetchFaqs();
    }, [fetchFaqs]);
    return (
        <>
            <div className="accordion-area accordion" id="faqAccordion">
                {
                    faqs.length > 1 && faqs.map((faq, i) =>
                        i == 0 ? <div key={i} className={'accordion-card ' + accordionStyle + ' ' + isActive}>
                            <div className="accordion-header" id="collapse-item-1">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-1"
                                    aria-expanded="true"
                                    aria-controls="collapse-1"
                                >
                                    <span className="text-theme">{faq.id}.</span>  {faq.attributes.question}
                                </button>
                            </div>
                            <div
                                id="collapse-1"
                                className="accordion-collapse collapse show"
                                aria-labelledby="collapse-item-1"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    <p className="faq-text">
                                        {faq.attributes.reponse}
                                    </p>
                                </div>
                            </div>
                        </div>
                            :
                            <div className={'accordion-card'}>
                                <div className="accordion-header" id={"collapse-item-" + faq.id}>
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={"#collapse-" + faq.id}
                                        aria-expanded="false"
                                        aria-controls={"collapse-" + faq.id}
                                    >
                                        <span className="text-theme">{faq.id}.</span>  {faq.attributes.question}
                                    </button>
                                </div>
                                <div
                                    id={"collapse-" + faq.id}
                                    className="accordion-collapse collapse"
                                    aria-labelledby={"#collapse-" + faq.id}
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        <p className="faq-text">
                                            {faq.attributes.reponse}
                                        </p>
                                    </div>
                                </div>
                            </div>

                    )
                }
            </div>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        faqs: state.faqs.faqs,
        loading: state.faqs.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFaqs: () => dispatch(fetchFaqs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Faqs);

