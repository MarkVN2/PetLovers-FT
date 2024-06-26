import DeletePet from "../functions/delete/deletePet";
import EditPet from "../functions/edit/editPet";
import RegisterPet from "../functions/register/registerPet";
import ShowPets from "../functions/show/showPet";
import Entry from "../io/entry";
import Company from "../models/company";
import ShopConsole from "./shopconsole";

export default class PetConsole implements ShopConsole{
    company: Company;
    active:boolean;
    constructor(company:Company){
        this.company = company;
        this.active = true;
    }
    enter():void{
        while(this.active){
            console.log("+-------------------------------------------+");
            console.log("|          1. INSERIR   Pet                 |");
            console.log("|          2. EXCLUIR   Pet                 |");
            console.log("|          3. EDITAR    Pet                 |");
            console.log("|          4. LISTAR    Pet                 |");
            console.log("|          0. Voltar                        |");
            console.log("+-------------------------------------------+");
        
            let entry = new Entry();
            let option = entry.getNum(`Por favor, escolha uma opção: `);
    
            switch(option){
                case 1:
                    let reg = new RegisterPet(this.company.getClients)
                    reg.register()
                    break;
                case 2:
                    let del = new DeletePet(this.company.getClients)
                    del.delete()
                    break;
                case 3:
                    let edit = new EditPet(this.company.getClients)
                    edit.edit();
                    break
                case 4:
                    let show = new ShowPets(this.company.getClients)
                    show.show()
                    break
                case 5:
                    break
                case 0:
                    this.active = false
                    break;
                default:
                    console.log(`Opção inválida`)
                    break;
            }
        }
    }
   
}