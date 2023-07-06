const Breadcumb = ({ breadcumb, marginBottom }) => {
    let mb = marginBottom ? marginBottom : '50';
    return (
        <>
            {
                breadcumb && (
                    <div className={'mb-' + mb}>
                        <div className="breadcumb-wrapper"
                            style={{ marginTop: 100, backgroundImage: "url(assets/img/hero/hero_bg_4_2.jpg)" }}>
                            <div className="container">
                                <div className="breadcumb-content">
                                    <h1 className="breadcumb-title">{breadcumb.text}</h1>
                                    <ul className="breadcumb-menu">
                                        <li><a href={breadcumb.mainLink}>{breadcumb.mainLinkText}</a></li>
                                        <li>{breadcumb.sublink}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    );
}

export default Breadcumb;
