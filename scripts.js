function changeLanguage(lang) {
    const languages = {
        he: {
            title: 'שער התורה - תרומות',
            welcome: 'ברוכים הבאים לכולל שער התורה',
            letter: 'מכתב מהרבנים',
            israel: 'תרומה בישראל',
            usa: 'Donate in the USA',
            uk: 'Donate in the UK'
        },
        en: {
            title: 'Shaar HaTorah - Donations',
            welcome: 'Welcome to Shaar HaTorah Kollel',
            letter: 'Letter from the Rabbis',
            israel: 'Donate in Israel',
            usa: 'Donate in the USA',
            uk: 'Donate in the UK'
        },
        yi: {
            title: 'שער התורה - נדבות',
            welcome: 'ברוכים הבאים צו שער התורה כולל',
            letter: 'בריוו פונעם רבנים',
            israel: 'נדבות אין ישראל',
            usa: 'נדבות אין אמעריקע',
            uk: 'נדבות אין ענגלאנד'
        }
    };
    document.title = languages[lang].title;
    document.querySelector('h1').innerText = languages[lang].welcome;
    document.querySelector('#letter h2').innerText = languages[lang].letter;
    document.querySelector('#israel h2').innerText = languages[lang].israel;
    document.querySelector('#usa h2').innerText = languages[lang].usa;
    document.querySelector('#uk h2').innerText = languages[lang].uk;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert("המייל הועתק ללוח!");
    }).catch(function(err) {
        console.error("שגיאה בהעתקה: ", err);
    });
}
