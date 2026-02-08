export interface Country {
    code: string;
    name: string;
    flag: string;
    dish: {
        name: string;
        description: string;
        imageKeywords: string;
    };
}

// The 70 most populated countries with their signature dishes
export const countries: Country[] = [
    { code: "CN", name: "China", flag: "🇨🇳", dish: { name: "Kung Pao Chicken", description: "A spicy stir-fry dish with chicken, peanuts, vegetables, and chili peppers in a savory sauce.", imageKeywords: "kung pao chicken dish" } },
    { code: "IN", name: "India", flag: "🇮🇳", dish: { name: "Butter Chicken", description: "Tender chicken pieces in a rich, creamy tomato-based curry sauce with aromatic spices.", imageKeywords: "butter chicken curry" } },
    { code: "US", name: "United States", flag: "🇺🇸", dish: { name: "Classic Cheeseburger", description: "A juicy beef patty with melted cheese, lettuce, tomato, and special sauce on a toasted bun.", imageKeywords: "american cheeseburger" } },
    { code: "ID", name: "Indonesia", flag: "🇮🇩", dish: { name: "Nasi Goreng", description: "Indonesian fried rice with sweet soy sauce, shrimp paste, shallots, and topped with a fried egg.", imageKeywords: "nasi goreng fried rice" } },
    { code: "PK", name: "Pakistan", flag: "🇵🇰", dish: { name: "Biryani", description: "Fragrant basmati rice layered with spiced meat, caramelized onions, and aromatic herbs.", imageKeywords: "pakistani biryani" } },
    { code: "NG", name: "Nigeria", flag: "🇳🇬", dish: { name: "Jollof Rice", description: "A beloved one-pot rice dish cooked in a rich tomato and pepper sauce with spices.", imageKeywords: "jollof rice" } },
    { code: "BR", name: "Brazil", flag: "🇧🇷", dish: { name: "Feijoada", description: "A hearty black bean stew with pork, served with rice, collard greens, and orange slices.", imageKeywords: "brazilian feijoada" } },
    { code: "BD", name: "Bangladesh", flag: "🇧🇩", dish: { name: "Hilsa Fish Curry", description: "The national fish of Bangladesh cooked in a mustard-based curry with turmeric and green chilies.", imageKeywords: "hilsa fish curry" } },
    { code: "RU", name: "Russia", flag: "🇷🇺", dish: { name: "Beef Stroganoff", description: "Tender strips of beef in a creamy mushroom sauce, served over egg noodles or rice.", imageKeywords: "beef stroganoff" } },
    { code: "MX", name: "Mexico", flag: "🇲🇽", dish: { name: "Tacos al Pastor", description: "Marinated pork tacos with pineapple, onions, and cilantro on soft corn tortillas.", imageKeywords: "tacos al pastor" } },
    { code: "JP", name: "Japan", flag: "🇯🇵", dish: { name: "Ramen", description: "Rich pork or chicken broth with wheat noodles, chashu pork, soft-boiled egg, and nori.", imageKeywords: "japanese ramen bowl" } },
    { code: "ET", name: "Ethiopia", flag: "🇪🇹", dish: { name: "Doro Wat", description: "A spicy chicken stew with berbere spices, served with injera flatbread.", imageKeywords: "doro wat ethiopian" } },
    { code: "PH", name: "Philippines", flag: "🇵🇭", dish: { name: "Adobo", description: "Braised meat in vinegar, soy sauce, garlic, and black peppercorns - the national dish.", imageKeywords: "filipino adobo" } },
    { code: "EG", name: "Egypt", flag: "🇪🇬", dish: { name: "Koshari", description: "A comforting dish of rice, lentils, and pasta topped with spiced tomato sauce and crispy onions.", imageKeywords: "egyptian koshari" } },
    { code: "VN", name: "Vietnam", flag: "🇻🇳", dish: { name: "Pho", description: "Aromatic beef or chicken broth with rice noodles, fresh herbs, and tender slices of meat.", imageKeywords: "vietnamese pho" } },
    { code: "CD", name: "DR Congo", flag: "🇨🇩", dish: { name: "Moambe Chicken", description: "Chicken cooked in a rich palm nut sauce with African spices and vegetables.", imageKeywords: "moambe chicken" } },
    { code: "TR", name: "Turkey", flag: "🇹🇷", dish: { name: "Döner Kebab", description: "Seasoned meat slow-roasted on a vertical spit, served in bread with fresh vegetables.", imageKeywords: "doner kebab" } },
    { code: "IR", name: "Iran", flag: "🇮🇷", dish: { name: "Ghormeh Sabzi", description: "A fragrant herb stew with kidney beans and lamb, served with saffron rice.", imageKeywords: "ghormeh sabzi" } },
    { code: "DE", name: "Germany", flag: "🇩🇪", dish: { name: "Schnitzel", description: "A breaded and fried veal or pork cutlet, crispy on the outside and tender inside.", imageKeywords: "german schnitzel" } },
    { code: "TH", name: "Thailand", flag: "🇹🇭", dish: { name: "Pad Thai", description: "Stir-fried rice noodles with shrimp, tofu, peanuts, and tamarind sauce.", imageKeywords: "pad thai" } },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧", dish: { name: "Fish and Chips", description: "Beer-battered fish with thick-cut chips, served with mushy peas and tartar sauce.", imageKeywords: "fish and chips" } },
    { code: "FR", name: "France", flag: "🇫🇷", dish: { name: "Coq au Vin", description: "Chicken braised with wine, mushrooms, and pearl onions in a rich French sauce.", imageKeywords: "coq au vin" } },
    { code: "IT", name: "Italy", flag: "🇮🇹", dish: { name: "Carbonara", description: "Spaghetti with a creamy sauce of eggs, Pecorino Romano cheese, guanciale, and black pepper.", imageKeywords: "spaghetti carbonara" } },
    { code: "TZ", name: "Tanzania", flag: "🇹🇿", dish: { name: "Ugali na Nyama", description: "Cornmeal porridge served with grilled meat and vegetables in a savory sauce.", imageKeywords: "ugali with meat" } },
    { code: "ZA", name: "South Africa", flag: "🇿🇦", dish: { name: "Bobotie", description: "A Cape Malay dish of spiced minced meat baked with an egg-based topping.", imageKeywords: "bobotie south african" } },
    { code: "MM", name: "Myanmar", flag: "🇲🇲", dish: { name: "Mohinga", description: "Fish-based rice noodle soup considered Myanmar's national dish, served for breakfast.", imageKeywords: "mohinga soup" } },
    { code: "KR", name: "South Korea", flag: "🇰🇷", dish: { name: "Bibimbap", description: "A colorful bowl of rice topped with vegetables, meat, a fried egg, and gochujang sauce.", imageKeywords: "korean bibimbap" } },
    { code: "CO", name: "Colombia", flag: "🇨🇴", dish: { name: "Bandeja Paisa", description: "A hearty platter with beans, rice, ground beef, chicharrón, fried egg, and avocado.", imageKeywords: "bandeja paisa" } },
    { code: "KE", name: "Kenya", flag: "🇰🇪", dish: { name: "Nyama Choma", description: "Grilled meat, usually goat or beef, slow-roasted over charcoal and served with ugali.", imageKeywords: "nyama choma grilled" } },
    { code: "ES", name: "Spain", flag: "🇪🇸", dish: { name: "Paella", description: "A saffron-infused rice dish with seafood, chicken, and vegetables from Valencia.", imageKeywords: "spanish paella" } },
    { code: "AR", name: "Argentina", flag: "🇦🇷", dish: { name: "Asado", description: "Traditional barbecued beef ribs and sausages cooked low and slow over wood fire.", imageKeywords: "argentine asado" } },
    { code: "DZ", name: "Algeria", flag: "🇩🇿", dish: { name: "Couscous Royal", description: "Steamed semolina served with lamb, merguez, vegetables, and chickpeas in broth.", imageKeywords: "couscous royal" } },
    { code: "SD", name: "Sudan", flag: "🇸🇩", dish: { name: "Ful Medames", description: "Slow-cooked fava beans mashed with olive oil, garlic, and spices, served with bread.", imageKeywords: "ful medames" } },
    { code: "UA", name: "Ukraine", flag: "🇺🇦", dish: { name: "Borscht", description: "A vibrant beetroot soup with meat and vegetables, served with sour cream and dill.", imageKeywords: "ukrainian borscht" } },
    { code: "IQ", name: "Iraq", flag: "🇮🇶", dish: { name: "Masgouf", description: "Grilled carp fish seasoned with tamarind and turmeric, cooked over an open fire.", imageKeywords: "masgouf fish" } },
    { code: "AF", name: "Afghanistan", flag: "🇦🇫", dish: { name: "Kabuli Pulao", description: "Rice cooked with lamb, raisins, carrots, and nuts - Afghanistan's national dish.", imageKeywords: "kabuli pulao" } },
    { code: "PL", name: "Poland", flag: "🇵🇱", dish: { name: "Pierogi", description: "Dumplings filled with potato and cheese, sauerkraut, or meat, served with sour cream.", imageKeywords: "polish pierogi" } },
    { code: "CA", name: "Canada", flag: "🇨🇦", dish: { name: "Poutine", description: "Crispy french fries topped with cheese curds and smothered in rich gravy.", imageKeywords: "canadian poutine" } },
    { code: "MA", name: "Morocco", flag: "🇲🇦", dish: { name: "Tagine", description: "A slow-cooked stew of meat and vegetables with preserved lemons and olives.", imageKeywords: "moroccan tagine" } },
    { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", dish: { name: "Kabsa", description: "Spiced rice with meat, tomatoes, and a blend of aromatic Middle Eastern spices.", imageKeywords: "saudi kabsa" } },
    { code: "UZ", name: "Uzbekistan", flag: "🇺🇿", dish: { name: "Plov", description: "A festive rice dish with lamb, carrots, and spices, cooked in a large kazan.", imageKeywords: "uzbek plov" } },
    { code: "PE", name: "Peru", flag: "🇵🇪", dish: { name: "Ceviche", description: "Fresh raw fish cured in citrus juices with onions, cilantro, and chili peppers.", imageKeywords: "peruvian ceviche" } },
    { code: "AO", name: "Angola", flag: "🇦🇴", dish: { name: "Muamba de Galinha", description: "Chicken stew with palm oil, okra, and spices - Angola's national dish.", imageKeywords: "muamba de galinha" } },
    { code: "MY", name: "Malaysia", flag: "🇲🇾", dish: { name: "Nasi Lemak", description: "Coconut rice served with sambal, fried anchovies, peanuts, egg, and cucumber.", imageKeywords: "nasi lemak" } },
    { code: "MZ", name: "Mozambique", flag: "🇲🇿", dish: { name: "Piri Piri Chicken", description: "Chicken marinated and grilled with fiery piri piri chili sauce.", imageKeywords: "piri piri chicken" } },
    { code: "GH", name: "Ghana", flag: "🇬🇭", dish: { name: "Fufu with Soup", description: "Pounded cassava and plantain served with a rich groundnut or palm nut soup.", imageKeywords: "ghanaian fufu soup" } },
    { code: "YE", name: "Yemen", flag: "🇾🇪", dish: { name: "Mandi", description: "Fragrant rice and meat dish smoked with wood, flavored with a special spice blend.", imageKeywords: "yemeni mandi" } },
    { code: "NP", name: "Nepal", flag: "🇳🇵", dish: { name: "Dal Bhat", description: "A staple meal of lentil soup with rice, vegetable curries, and pickles.", imageKeywords: "nepali dal bhat" } },
    { code: "VE", name: "Venezuela", flag: "🇻🇪", dish: { name: "Arepa", description: "Cornmeal patties stuffed with cheese, black beans, or shredded meat.", imageKeywords: "venezuelan arepa" } },
    { code: "MG", name: "Madagascar", flag: "🇲🇬", dish: { name: "Romazava", description: "A beef and leafy green stew considered Madagascar's national dish.", imageKeywords: "romazava stew" } },
    { code: "CM", name: "Cameroon", flag: "🇨🇲", dish: { name: "Ndolé", description: "A stew of bitter leaves, peanuts, and meat - Cameroon's national dish.", imageKeywords: "ndole cameroon" } },
    { code: "AU", name: "Australia", flag: "🇦🇺", dish: { name: "Meat Pie", description: "A hand-sized pie filled with minced meat and gravy, a true Australian icon.", imageKeywords: "australian meat pie" } },
    { code: "CI", name: "Ivory Coast", flag: "🇨🇮", dish: { name: "Attiéké with Fish", description: "Fermented cassava couscous served with grilled fish and spicy sauce.", imageKeywords: "attieke fish" } },
    { code: "TW", name: "Taiwan", flag: "🇹🇼", dish: { name: "Beef Noodle Soup", description: "Rich braised beef in a savory broth with hand-pulled noodles and bok choy.", imageKeywords: "taiwanese beef noodle soup" } },
    { code: "NE", name: "Niger", flag: "🇳🇪", dish: { name: "Djerma Rice", description: "Spiced rice cooked with meat and vegetables in a traditional clay pot.", imageKeywords: "djerma rice" } },
    { code: "LK", name: "Sri Lanka", flag: "🇱🇰", dish: { name: "Rice and Curry", description: "A feast of rice with multiple curries, sambols, and pickles.", imageKeywords: "sri lankan rice curry" } },
    { code: "BF", name: "Burkina Faso", flag: "🇧🇫", dish: { name: "Riz Gras", description: "A flavorful one-pot rice dish with meat and vegetables in tomato sauce.", imageKeywords: "riz gras" } },
    { code: "ML", name: "Mali", flag: "🇲🇱", dish: { name: "Tigadèguèna", description: "A peanut butter stew with meat and vegetables, served with rice or millet.", imageKeywords: "tigadeguena" } },
    { code: "RO", name: "Romania", flag: "🇷🇴", dish: { name: "Sarmale", description: "Cabbage rolls stuffed with spiced minced meat and rice, simmered in tomato sauce.", imageKeywords: "romanian sarmale" } },
    { code: "MW", name: "Malawi", flag: "🇲🇼", dish: { name: "Nsima with Chambo", description: "Cornmeal porridge served with grilled tilapia and vegetable relish.", imageKeywords: "nsima chambo" } },
    { code: "CL", name: "Chile", flag: "🇨🇱", dish: { name: "Pastel de Choclo", description: "A savory corn pie filled with ground beef, chicken, olives, and hard-boiled eggs.", imageKeywords: "pastel de choclo" } },
    { code: "ZM", name: "Zambia", flag: "🇿🇲", dish: { name: "Ifisashi", description: "A peanut-based vegetable stew with greens, served with nshima.", imageKeywords: "ifisashi zambia" } },
    { code: "KZ", name: "Kazakhstan", flag: "🇰🇿", dish: { name: "Beshbarmak", description: "Boiled meat over flat noodles, a traditional dish meaning 'five fingers'.", imageKeywords: "beshbarmak" } },
    { code: "EC", name: "Ecuador", flag: "🇪🇨", dish: { name: "Encebollado", description: "A fish soup with yuca, onion, and cilantro, often eaten as a hangover cure.", imageKeywords: "encebollado soup" } },
    { code: "SY", name: "Syria", flag: "🇸🇾", dish: { name: "Kibbeh", description: "Bulgur shells stuffed with spiced lamb and pine nuts, fried until golden.", imageKeywords: "kibbeh" } },
    { code: "NL", name: "Netherlands", flag: "🇳🇱", dish: { name: "Stamppot", description: "Mashed potatoes with vegetables like kale or sauerkraut, served with smoked sausage.", imageKeywords: "dutch stamppot" } },
    { code: "SN", name: "Senegal", flag: "🇸🇳", dish: { name: "Thieboudienne", description: "Fish and rice cooked in a rich tomato sauce with vegetables - Senegal's national dish.", imageKeywords: "thieboudienne" } },
    { code: "GT", name: "Guatemala", flag: "🇬🇹", dish: { name: "Pepián", description: "A hearty meat stew with roasted spices, tomatoes, and pumpkin seeds.", imageKeywords: "guatemalan pepian" } },
    { code: "TD", name: "Chad", flag: "🇹🇩", dish: { name: "Daraba", description: "A stew of okra, tomatoes, and peanut butter served with meat and millet.", imageKeywords: "daraba chad" } },
    { code: "SO", name: "Somalia", flag: "🇸🇴", dish: { name: "Bariis Iskukaris", description: "Spiced rice with meat, raisins, and a blend of cardamom and cumin.", imageKeywords: "somali rice" } },
];

// Helper to get remaining countries that haven't been drawn
export function getAvailableCountries(drawnCountryCodes: string[]): Country[] {
    return countries.filter(c => !drawnCountryCodes.includes(c.code));
}

// Get a random country from available ones
export function getRandomCountry(availableCountries: Country[]): Country | null {
    if (availableCountries.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * availableCountries.length);
    return availableCountries[randomIndex];
}
