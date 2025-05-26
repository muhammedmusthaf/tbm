import React from "react";
import "../styles/productstore.css";

const products = [
    {
      id: 1,
      title: "Cement",
      image: "assets/cement.jpg",
      types: ["ACC Cement", "Ultratech Cement", "ACC Plus", "Birla Cement", "Ambuja Cement", "JSW Cement"],
      description: "Premium grade cement ideal for residential, commercial, and industrial construction. Ensures durability, strength, and resistance to moisture and cracks.",
      icon: "🏗️",
    },
    {
      id: 2,
      title: "Rods & Steel",
      image: "assets/rod.jpg",
      types: ["TMT Bars (6mm – 32mm)", "MS Rods", "Binding Wire", "Structural Steel"],
      description: "High-strength TMT rods for reinforced concrete structures. Corrosion-resistant and suitable for foundation, columns, and slabs.",
      icon: "🔩",
    },
    {
      id: 3,
      title: "Electrical Items",
      image: "assets/electrical.jpg",
      types: ["Switches & Sockets", "MCBs, DB Boxes", "Conduit Pipes", "Wiring Cables (Finolex, Havells)", "LED Bulbs, Tube Lights", "Distribution Panels"],
      description: "Certified and branded electrical products for safe and reliable home electrical systems, including complete wiring accessories.",
      icon: "💡",
    },
    {
      id: 4,
      title: "House Essentials",
      image: "assets/tank.jpg",
      types: ["Bricks (Clay, Fly Ash)", "Hollow Blocks", "Paver Blocks", "Plumbing Fixtures", "Taps & Fittings", "Water Tanks"],
      description: "Basic construction essentials and plumbing items that form the foundation of any home construction or renovation.",
      icon: "🏠",
    },
    {
      id: 5,
      title: "Pipes & Plumbing",
      image: "assets/pipe.jpg",
      types: ["PVC Pipes (Ashirvad, Supreme)", "CPVC Pipes", "GI Pipes", "SWR Pipes", "Pipe Fittings & Joints"],
      description: "High-quality plumbing pipes and accessories for leak-proof and long-lasting water distribution and drainage systems.",
      icon: "🚰",
    },
    {
      id: 6,
      title: "Sand & Aggregates",
      image: "assets/sand.jpg",
      types: ["River Sand", "M Sand", "Gravel", "Stone Chips", "Crushed Stone"],
      description: "Finely graded sand and aggregates used for cement mixing, flooring, and plastering. Ensures strength and smooth finish.",
      icon: "🏖️",
    },
    {
      id: 7,
      title: "Interior Materials",
      image: "assets/inte.jpeg",
      types: ["Plywood & Laminates", "False Ceiling Panels", "Wall Putty", "Wall Paints", "Tiles & Granite", "Decorative Panels"],
      description: "Aesthetic interior materials to enhance beauty and comfort—includes finishing items for flooring, ceiling, and walls.",
      icon: "🪵",
    },
    {
      id: 8,
      title: "Doors & Windows",
      image: "assets/window.jpg",
      types: ["Wooden Doors", "Flush Doors", "UPVC Windows", "Aluminum Frames", "Door Locks & Handles"],
      description: "Secure, stylish, and strong doors and windows available in various materials suitable for all types of homes.",
      icon: "🚪",
    },
    {
      id: 9,
      title: "Bathroom Fittings",
      image: "assets/base.jpg",
      types: ["Wash Basins", "Western & Indian Toilets", "Faucets & Showers", "Geysers", "Bathroom Accessories"],
      description: "Modern and efficient bathroom essentials combining utility with style—available in standard and luxury models.",
      icon: "🛁",
    },
    {
      id: 10,
      title: "Paints & Finishes",
      image: "assets/paints.jpg",
      types: ["Emulsion Paints (Asian, Berger)", "Primer, Thinner, Sealer", "Exterior Wall Coatings", "Texture Paints", "Wood Polishes"],
      description: "Long-lasting, weather-resistant paints with smooth finishes for walls, ceilings, and wood. Eco-friendly options available.",
      icon: "🖼️",
    },
    {
      id: 11,
      title: "Tools & Hardware",
      image: "assets/hard.jpg.crdownload",
      types: ["Hammers, Spades, Trowels", "Drills, Saws", "Measuring Tapes, Levels", "Screws, Bolts, Nails", "Adhesives (Fevicol, Araldite)"],
      description: "Essential construction and repair tools for professional and home use. Durable and easy to handle for any project.",
      icon: "🛠️",
    },
  ];
  

const Productstore = () => {
  return (
    <div className="products-containerce">
      <h1 className="page-titlece">
        Our Products
        <span>High Quality Construction Materials</span>
      </h1>

      <div className="products-gridce">
        {products.map((product) => (
          <div key={product.id} className="product-cardce">
            <img
              src={product.image}
              alt={product.title}
              className="card-imagece"
            />
            <div className="card-contentce">
              <div className="card-headerce">
                <div className="category-iconce">{product.icon}</div>
                <h3 className="category-titlece">{product.title}</h3>
              </div>
              <div className="type-bubblesce">
                {product.types.map((type, index) => (
                  <div key={index} className="type-bubblece">
                    {type}
                  </div>
                ))}
              </div>
              <p className="product-descriptionce">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productstore;
