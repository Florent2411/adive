const ShareSocialMedia = ({ titre }) => {
    return (
        <>
            <div className="col-sm-auto text-xl-end">
                <span className="share-links-title">{titre}:</span>
                <ul className="social-links">
                    <li>
                        <a href="https://facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/" target="_blank">
                            <i className="fab fa-linkedin-in" />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/" target="_blank">
                            <i className="fab fa-instagram" />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}


export default ShareSocialMedia;
