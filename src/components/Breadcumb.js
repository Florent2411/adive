const Breadcumb = ({ breadcumb, marginBottom }) => {
    let mb = marginBottom ? marginBottom : '50';
    return (
        <>
            {
                breadcumb && (
                    <div className={'mb-' + mb}>
                        <div className="breadcumb-wrapper bg-gradient-11">
                            <div className="container">
                                < div className="breadcumb-content" style={{
                                    marginTop: 80
                                }}>
                                    <h1 className="breadcumb-title">{breadcumb.text}</h1>
                                    <ul className="breadcumb-menu">
                                        <li><a href={breadcumb.mainLink}>{breadcumb.mainLinkText}</a></li>
                                        <li>{breadcumb.sublink}</li>
                                    </ul>
                                </div>
                            </div>
                        </div >
                    </div >
                )
            }

        </>
    );
}

export default Breadcumb;
