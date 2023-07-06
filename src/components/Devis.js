const Devis = ({ }) => {
    return (
        <>
            <form action="#" className="quote-form ajax-contact">
                <div className="row">
                    <div className="form-group col-md-6"><input type="text" required className="form-control" name="name" id="name" placeholder="Votre nom complet" /> <i className="fal fa-user" /></div>
                    <div className="form-group col-md-6"><input type="email" required className="form-control" name="email" id="email" placeholder="Votre Email" /> <i className="fal fa-envelope" /></div>
                    <div className="form-group col-md-6"><input type="tel" required className="form-control" name="phone" id="number" placeholder="Votre numéro de téléphone" /> <i className="fal fa-phone" /></div>
                    <div className="form-group col-md-6"><select name="service" required id="service" className="form-select">
                        <option value disabled="disabled" selected="selected" hidden>Selectionnez un service
                        </option>
                        <option value="Mise en rélation emploi">Mise en rélation emploi</option>
                        <option value="Formation professionnelle">Formation professionnelle</option>
                        <option value="Service de livraison">Service de livraison</option>
                        <option value="Prospection commerciale">Prospection commerciale</option>
                        <option value="Stratégie de marketing digital">Stratégie de marketing digital</option>
                        <option value="Rédaction de contenu web">Rédaction de contenu web</option>
                        <option value="Conception graphique">Conception graphique</option>
                        <option value="Vente en ligne">Vente en ligne</option>
                    </select>
                        <i className="fal fa-chevron-down" />
                    </div>
                    <div className="form-group col-12"><textarea name="message" id="message" required cols={30} rows={3} className="form-control" placeholder="Votre Message" defaultValue={""} /> <i className="fal fa-comment" /></div>
                    <div className="form-btn col-12"><button className="as-btn">Envoyer</button></div>
                </div>
                <p className="form-messages mb-0 mt-3" />
            </form>
        </>
    );
}

export default Devis;
