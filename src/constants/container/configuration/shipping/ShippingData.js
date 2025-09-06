export const ProductColumns = [
    { label: "No." },
    { label: "Product name", isSortable: true },
    { label: "Short code", isSortable: true },
    { label: "CEC Charge", isSortable: true },
    { label: "Action", datakey: "action" },
  ];
  export const ProductData = [
    { id: "01", product_name: "Digital Inkjet Printing Machine", code: "I", charge: "Yes" },
    { id: "02", product_name: "Rapier Looms", code: "R", charge: "Yes" },
    { id: "03", product_name: "Jacquard Machine", code: "J", charge: "No" },
    { id: "04", product_name: "Embroidery Machine", code: "E", charge: "No" },

    { id: "05", product_name: "Airjet Loom", code: "A", charge: "Yes" },
    { id: "06", product_name: "Waterjet Loom", code: "W", charge: "Yes" },
    { id: "07", product_name: "Used and Recondition Textile Machine", code: "U", charge: "No" },
    { id: "08", product_name: "Old and Used Textile Machinery", code: "O", charge: "Yes" },
    { id: "09", product_name: "Rapier and Jacquard", code: "RJ", charge: "Yes" },
    { id: "10", product_name: "Rapier with Jacquard", code: "RWJ", charge: "Yes" },
  ];
  
  export const chackboxValues=[{label:"yes",value:true},{label:"no",value:false}]