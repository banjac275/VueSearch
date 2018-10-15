const state = {
  itemValues: [
    {"id": 1, "name": "Automotive", "subCategories": [
      {"id": 1, "name": "Economy", "brands": [
        {"id": 1, "name": "BMW"},
        {"id": 2, "name": "Toyota"},
        {"id": 3, "name": "Honda"},
        {"id": 4, "name": "Mercedes-Benz"}
      ]},
      {"id": 2, "name": "Family Car", "brands":[]},
      {"id": 3, "name": "Saloons", "brands": [
        {"id": 1, "name": "BMW"},
        {"id": 2, "name": "Toyota"},
        {"id": 3, "name": "Honda"},
        {"id": 4, "name": "Mercedes-Benz"}
      ]},
      {"id": 4, "name": "Luxury vehicle", "brands": [
        {"id": 1, "name": "BMW"},
        {"id": 2, "name": "Toyota"},
        {"id": 3, "name": "Honda"},
        {"id": 4, "name": "Mercedes-Benz"}
      ]},
      {"id": 5, "name": "Sports Cars", "brands": [
        {"id": 1, "name": "BMW"},
        {"id": 2, "name": "Toyota"},
        {"id": 3, "name": "Honda"},
        {"id": 4, "name": "Mercedes-Benz"}
      ]},
      {"id": 6, "name": "Off-roaders", "brands": [
        {"id": 1, "name": "BMW"},
        {"id": 2, "name": "Toyota"},
        {"id": 3, "name": "Honda"},
        {"id": 4, "name": "Mercedes-Benz"}
      ]},
      {"id": 7, "name": "Commercial vehicle", "brands": [
        {"id": 1,"name": "BMW"},
        {"id": 2, "name": "Toyota"},
        {"id": 3, "name": "Honda"},
        {"id": 4, "name": "Mercedes-Benz"}
      ]},
      {"id": 8, "name": "Other", "brands": [
        {"id": 1, "name": "BMW"},
        {"id": 2, "name": "Toyota"},
        {"id": 3, "name": "Honda"},
        {"id": 4, "name": "Mercedes-Benz"}
      ]}
    ]},
    {"id": 2, "name": "Alcohol", "subCategories": [
      {"id": 9, "name": "Wines", "brands": [
        {"id": 5, "name": "Budweiser"}
      ]},
      {"id": 10, "name": "Beers", "brands": [
        {"id": 5, "name": "Budweiser"}
      ]},
      {"id": 11, "name": "Spirits", "brands": [
        {"id": 5, "name": "Budweiser"}
      ]}
    ]},
    {"id": 3, "name": "Books and stationery", "subCategories": [
      {"id": 12, "name": "Printing", "brands":[]},
      {"id": 13, "name": "Cards", "brands":[]},
      {"id": 14, "name": "Paper", "brands":[]},
      {"id": 15, "name": "Pens", "brands":[]},
      {"id": 16, "name": "Writing materials", "brands":[]}
    ]},
    {"id": 4, "name": "Chemists and drugstores", "subCategories": [
      {"id": 17, "name": "Beauty products", "brands": [
        {"id": 6, "name": "L'Oréal"},
        {"id": 7, "name": "Gillette"}
      ]},
      {"id": 18, "name": "Toiletries", "brands": [
        {"id": 6, "name": "L'Oréal"},
        {"id": 7, "name": "Gillette"}
      ]},
      {"id": 19, "name": "Cosmetics", "brands": [
        {"id": 6, "name": "L'Oréal"},
        {"id": 7, "name": "Gillette"}
      ]}
    ]},
    {"id": 5, "name": "Clothing", "subCategories": [
      {"id": 20, "name": "Baby wear and nursery goods", "brands": [
        {"id": 8, "name": "Louis Vuitton"},
        {"id": 9, "name": "NIKE"},
        {"id": 10, "name": "Hermès"}
      ]},
      {"id": 21, "name": "Children’s wear", "brands": [
        {"id": 8, "name": "Louis Vuitton"},
        {"id": 9, "name": "NIKE"},
        {"id": 10, "name": "Hermès"}
      ]},
      {"id": 22, "name": "Ladies’ wear", "brands": [
        {"id": 8, "name": "Louis Vuitton"},
        {"id": 9, "name": "NIKE"},
        {"id": 10, "name": "Hermès"}
      ]},
      {"id": 23, "name": "Menswear", "brands": [
        {"id": 8, "name": "Louis Vuitton"},
        {"id": 9, "name": "NIKE"},
        {"id": 10, "name": "Hermès"}
      ]},
      {"id": 24, "name": "Knitwear", "brands": [
        {"id": 8, "name": "Louis Vuitton"},
        {"id": 9, "name": "NIKE"},
        {"id": 10, "name": "Hermès"}
      ]},
      {"id": 25, "name": "Fashion accessories", "brands": [
        {"id": 8, "name": "Louis Vuitton"},
        {"id": 9, "name": "NIKE"},
        {"id": 10, "name": "Hermès"}
      ]},
      {"id": 26, "name": "Work wear", "brands": [
        {"id": 8, "name": "Louis Vuitton"},
        {"id": 9, "name": "NIKE"},
        {"id": 10, "name": "Hermès"}
      ]},{"id": 27, "name": "School wear", "brands": [
        {"id": 8, "name": "Louis Vuitton"},
        {"id": 9, "name": "NIKE"},
        {"id": 10, "name": "Hermès"}
      ]},
      {"id":28,"name":"Maternity wear","brands":[
        {"id":8,"name":"Louis Vuitton"},
        {"id":9,"name":"NIKE"},
        {"id":10,"name":"Hermès"}
      ]},
      {"id":29,"name":"Lingerie","brands":[
        {"id":8,"name":"Louis Vuitton"},
        {"id":9,"name":"NIKE"},
        {"id":10,"name":"Hermès"}
      ]},
      {"id":30,"name":"Leather wear","brands":[
        {"id":8,"name":"Louis Vuitton"},
        {"id":9,"name":"NIKE"},
        {"id":10,"name":"Hermès"}
      ]},
      {"id":31,"name":"Sports wear","brands":[
        {"id":8,"name":"Louis Vuitton"},
        {"id":9,"name":"NIKE"},
        {"id":10,"name":"Hermès"}
      ]},
      {"id":32,"name":"Bridal wear","brands":[
        {"id":8,"name":"Louis Vuitton"},
        {"id":9,"name":"NIKE"},
        {"id":10,"name":"Hermès"}
      ]}
    ]},
      {"id":6,"name":"DIY goods","subCategories": [
        {"id":33,"name":"Wallpaper","brands":[]},
        {"id":34,"name":"Paint","brands":[]},
        {"id":35,"name":"Hardware","brands":[]},
        {"id":36,"name":"Ironmongery","brands":[]},
        {"id":37,"name":"Doors","brands":[]}
      ]},
      {"id":7,"name":"Electrical goods","subCategories": [
        {"id":38,"name":"Computer hardware","brands": [
          {"id":11,"name":"Microsoft"},
          {"id":12,"name":"Samsung"},
          {"id":13,"name":"Apple"}
        ]},
        {"id":39,"name":"Computer software","brands": [
          {"id":11,"name":"Microsoft"},
          {"id":12,"name":"Samsung"},
          {"id":13,"name":"Apple"}
        ]},
        {"id":40,"name":"White goods","brands": [
          {"id":11,"name":"Microsoft"},
          {"id":12,"name":"Samsung"},
          {"id":13,"name":"Apple"}
        ]},
        {"id":41,"name":"Brown goods","brands": [
          {"id":11,"name":"Microsoft"},
          {"id":12,"name":"Samsung"},
          {"id":13,"name":"Apple"}
        ]},
        {"id":42,"name":"Audio-visual","brands": [
          {"id":9,"name":"NIKE"},
          {"id":11,"name":"Microsoft"},
          {"id":12,"name":"Samsung"},
          {"id":13,"name":"Apple"}
        ]}
      ]},
      {"id":8,"name":"Finance","subCategories": [
        {"id":43,"name":"Banking","brands":[]},
        {"id":44,"name":"Insurance","brands":[]},
        {"id":45,"name":"Credit","brands":[]},
        {"id":46,"name":"Building societies","brands":[]}
      ]},
      {"id":9,"name":"Footwear","subCategories": [
        {"id":47,"name":"Children’s","brands": [
          {"id":9,"name":"NIKE"}
        ]},
        {"id":48,"name":"Ladies’ and men's shoes","brands": [
          {"id":9,"name":"NIKE"}
        ]},
        {"id":49,"name":"Sports shoes","brands": [
          {"id":9,"name":"NIKE"}
        ]},
        {"id":50,"name":"Shoe repair","brands":[
          {"id":9,"name":"NIKE"}
        ]}
      ]},
      {"id":10,"name":"Foodstuffs and consumables","subCategories":[
        {"id":51,"name":"Grocery","brands":[
          {"id":14,"name":"Coca Cola"},
          {"id":15,"name":"McDonald's"},
          {"id":16,"name":"Nescafe"}
        ]},
        {"id":52,"name":"Butchers and poultry","brands":[
          {"id":14,"name":"Coca Cola"},
          {"id":15,"name":"McDonald's"},
          {"id":16,"name":"Nescafe"}
        ]},
        {"id":53,"name":"Bakery","brands":[
          {"id":14,"name":"Coca Cola"},
          {"id":15,"name":"McDonald's"},
          {"id":16,"name":"Nescafe"}
        ]},
        {"id":54,"name":"Fishmongers","brands":[
          {"id":14,"name":"Coca Cola"},
          {"id":15,"name":"McDonald's"},
          {"id":16,"name":"Nescafe"}
        ]},
        {"id":55,"name":"Greengrocers","brands":[
          {"id":14,"name":"Coca Cola"},
          {"id":15,"name":"McDonald's"},
          {"id":16,"name":"Nescafe"}
        ]},
        {"id":56,"name":"Confectionery","brands":[
          {"id":14,"name":"Coca Cola"},
          {"id":15,"name":"McDonald's"},
          {"id":16,"name":"Nescafe"}
        ]},
        {"id":57,"name":"Health foods","brands":[
          {"id":14,"name":"Coca Cola"},
          {"id":15,"name":"McDonald's"},
          {"id":16,"name":"Nescafe"}
        ]},
        {"id":58,"name":"Organic foods","brands":[
          {"id":14,"name":"Coca Cola"},
          {"id":15,"name":"McDonald's"},
          {"id":16,"name":"Nescafe"}
        ]},
        {"id":59,"name":"Delicatessen","brands":[
          {"id":14,"name":"Coca Cola"},
          {"id":15,"name":"McDonald's"},
          {"id":16,"name":"Nescafe"}
        ]}
      ]},
      {"id":11,"name":"Furniture and carpets","subCategories":[
        {"id":60,"name":"Curtains","brands":[]},
        {"id":61,"name":"Sofas","brands":[]},
        {"id":62,"name":"Soft furnishings","brands":[]}
      ]},{"id":12,"name":"Garden products","subCategories":[
        {"id":63,"name":"Flowers","brands":[]},
        {"id":64,"name":"Plants","brands":[]},
        {"id":65,"name":"Gardening equipment","brands":[]}
      ]},
      {"id":13,"name":"Household and textiles","subCategories":[
        {"id":66,"name":"China","brands":[]},
        {"id":67,"name":"Household linens","brands":[]},
        {"id":68,"name":"Pictures and frames","brands":[]},
        {"id":69,"name":"Lighting","brands":[]},
        {"id":70,"name":"Drapers","brands":[]},
        {"id":71,"name":"Glassware","brands":[]},
        {"id":72,"name":"Bedding","brands":[]}
      ]},
      {"id":14,"name":"Music and film","subCategories":[
        {"id":73,"name":"Records","brands":[]},
        {"id":74,"name":"DVDs","brands":[]},
        {"id":75,"name":"CDs","brands":[]},
        {"id":76,"name":"Musical instruments","brands":[]}
      ]},
      {"id":15,"name":"Rentals","subCategories":[
        {"id":77,"name":"Television","brands":[]},
        {"id":78,"name":"Films","brands":[]},
        {"id":79,"name":"Games","brands":[]}
      ]},
      {"id":16,"name":"Sports equipment","subCategories":[
        {"id":80,"name":"Camping and outdoor goods","brands":[]},
        {"id":81,"name":"Leisure goods","brands":[]},
        {"id":82,"name":"Bicycles and cycle accessories","brands":[]}
      ]},{"id":17,"name":"Restaurants and take-away food","subCategories":[
        {"id":83,"name":"Traditional foods","brands":[]},
        {"id":84,"name":"International foods","brands":[]},
        {"id":85,"name":"Snacks","brands":[]
      }]
    }
  ]
};

const getters = {
  getItemValues: state => {
    return state.itemValues
  }
};

const mutations = {

}

const actions = {

}

export default {
  state,
  actions,
  mutations,
  getters
}