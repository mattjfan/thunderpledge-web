export const getPledgeInfo = (id, slug) => {
    // use the id and slug to verify that they match up
    // although the id is technically a primary key
    // these should be used together as primary key
    // so that our db can jointly offer uniqueness and quasi-human-readability

    // the following code is mocked until backend exists.
    const title = slug.replace(/-/gi, ' ');
    const pledge_goal = 1000000;
    const pledge_count = Math.round(Math.random() * pledge_goal);
    // const pledge_count = 1200000;
    const color_primary = 'red';
    const color_secondary = null;
    // const pledge_count = pledge_goal;
    // const pledge_count = 0;
    const img_url = 'https://images.pexels.com/photos/3278814/pexels-photo-3278814.jpeg';
    const blurb = 'super tech startupy blurb for innovation global good guild nice time'
    const description = `I'm baby organic ennui waistcoat brooklyn chambray direct trade venmo literally la croix drinking vinegar tattooed celiac sartorial blog. Mixtape irony asymmetrical synth marfa tattooed chia four dollar toast cred hella put a bird on it retro vice. Salvia 3 wolf moon tbh try-hard tousled iPhone lyft shabby chic chartreuse gochujang. Farm-to-table YOLO taxidermy tbh, kombucha tumeric fingerstache organic DIY narwhal roof party ramps gochujang kogi biodiesel. Gochujang four loko iPhone seitan pug.
Tote bag YOLO +1 art party mumblecore fam chillwave raw denim af. Typewriter sriracha blog shaman, dreamcatcher umami brooklyn cloud bread asymmetrical lyft marfa truffaut distillery meh. Poke hammock echo park, meggings taiyaki wayfarers semiotics. VHS sustainable aesthetic tumeric blue bottle sartorial. Vinyl mustache pop-up, truffaut keffiyeh church-key crucifix snackwave meggings leggings pitchfork typewriter la croix. Keffiyeh copper mug pok pok, neutra twee adaptogen iPhone DIY biodiesel meditation etsy occupy chambray. Keffiyeh pickled try-hard lyft cred typewriter selvage kickstarter.
Meh ramps meditation, sriracha portland paleo chambray. Hoodie pabst keffiyeh, tacos before they sold out venmo street art messenger bag intelligentsia green juice. Vice woke pork belly migas vinyl schlitz typewriter shabby chic, keytar gochujang poutine lomo cronut hot chicken. Church-key shoreditch mustache distillery chambray food truck celiac, gochujang hella butcher. Adaptogen trust fund gochujang, yr mumblecore photo booth lomo hella truffaut waistcoat cardigan lyft. Blue bottle woke gentrify copper mug chillwave pour-over gluten-free, blog pug portland microdosing.
Bitters meditation marfa, retro knausgaard next level echo park you probably haven't heard of them vexillologist letterpress scenester etsy chartreuse lumbersexual. Plaid etsy viral 3 wolf moon mixtape aesthetic 90's tattooed pitchfork selfies. Migas butcher disrupt leggings quinoa man bun, portland taxidermy bushwick selvage craft beer food truck everyday carry stumptown paleo. Dreamcatcher synth iceland twee, hot chicken slow-carb vegan swag vaporware mlkshk. Pour-over readymade listicle, gochujang tumeric hexagon knausgaard neutra. Taiyaki woke 90's kale chips skateboard plaid mumblecore twee crucifix cronut put a bird on it.
Jianbing shoreditch heirloom activated charcoal, kitsch gochujang air plant freegan tilde. Pitchfork try-hard kinfolk, drinking vinegar air plant trust fund tacos thundercats umami kale chips. Health goth pour-over pinterest lumbersexual selvage. Edison bulb vape 90's hell of street art vexillologist, keffiyeh vegan cold-pressed.
`;
    return {
        id,
        title,
        description,
        pledge_goal,
        pledge_count,
        color_primary,
        color_secondary,
        img_url,
        blurb,
        creator: null,
    }
}

export const getTransactionInfo = id => {
    const email = 'testemail@test.test'
    const pledge_url = 'https://url-to-pledge-link.com'
    return {
        email,
        pledge_url,
    }
}

export const submitTransaction = async (email, first, last) => {
    return 123; // stub
}