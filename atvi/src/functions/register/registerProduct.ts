import Entry from "../../io/entry";
import Product from "../../models/product";
import Register from "../register";

export default class RegisterProduct extends Register{
    private products : Array<Product>;
    private entry : Entry;

    constructor(products : Array<Product>){
        super();
        this.products = products;
        this.entry = new Entry()
    }
    
    public register(): void {
        console.log(`\n+-------------------------------------------+`)
        console.log(`| Início do cadastro de produto             |`);
        console.log(`+-------------------------------------------+`);

        let nome = this.entry.getStr(`Por favor informe o nome do produto: `)
        let value = this.entry.getNum(`Por favor informe o valor do produto: `);

        let product = new Product(nome,value);
        
        this.products.push(product)
        console.log(`\n+-------------------------------------------+`)
        console.log(`|          Cadastro concluído :)            |`);
        console.log(`+-------------------------------------------+\n`)
    }
}