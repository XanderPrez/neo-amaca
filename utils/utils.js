const API_URL = "https://api.musement.com/api/v3/";

export async function getStaticActivities() {
    const todayDiscounts = await fetch(
        `${API_URL}activities?discountedYES?limit10`,
        {
            method: 'GET',
            headers: {
                'Accept-Language': 'en-US',
                'X-Musement-Application': 'string',
                'X-Musement-Currency': 'USD',
                'X-Musement-Market': 'us',
                'X-Musement-Version': '3.4.0'
            }
        }
    );

    const dealsData = await todayDiscounts.text();
    console.log(dealsData)
}