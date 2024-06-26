import Entry from "../../io/entry";
import Client from "../../models/client";
import Delete from "../delete";

export default class DeletePet extends Delete{
    private clients : Array<Client>;
    private entry : Entry;
    constructor(clients : Array<Client>){
        super();
        this.clients = clients;
        this.entry = new Entry()
    }

    public delete(): void {
        if (this.clients.length == 0) {
            console.log(`\n+-------------------------------------------+`)
            console.log(`|          Nenhum cliente cadastrado        |`)
            console.log(`+-------------------------------------------+\n`)
            return
        }
        console.log(`\n+-------------------------------------------+`)
        let selectedClientCPF = this.entry.getStr("| CPF do dono do pet a ser deletado: ")
        console.log(`+-------------------------------------------+`)
        let selectedClient = this.clients.find(client => client.getCpf.getValue == selectedClientCPF)
        if (selectedClient != null ){
            if (selectedClient.getPets.length == 0) {
                console.log(`\n+-------------------------------------------+`)
                console.log(`|          Nenhum pet cadastrado            |`)
                console.log(`+-------------------------------------------+\n`)
                return
            }
            console.log(`+-------------------------------------------+`);
            console.log(`|                LISTA DE PET               |`)
            console.log(`+-------------------------------------------+`);
            
            selectedClient.getPets.forEach((pet,index) => {
                console.log(`| ID :` + (index + 1))
                console.log(`| NOME: ` + pet.getName ) ;
                console.log(`| GENÊRO: ` + pet.getGender);
                console.log(`| RAÇA: ` + pet.getRace);
                console.log(`| TIPO: ` + pet.getType);
            
                console.log(`+-------------------------------------------+`);
            });
            let selectedPetID = this.entry.getStr("| ID do pet a ser deletado: ")
            console.log(`+-------------------------------------------+`)
            let selectedPet = selectedClient.getPets[parseInt(selectedPetID) - 1]
            if (selectedPet != null){
                selectedClient.getPets.splice(selectedClient.getPets.indexOf(selectedPet), 1)
                console.log(`+-------------------------------------------+`)
                console.log(`|        Pet deletado com sucesso!          |`)
                console.log(`+-------------------------------------------+\n`)
                return
            }
            else{
                console.log(`+-------------------------------------------+`)
                console.log(`|        Pet não encontrado!                |`)
                console.log(`+-------------------------------------------+\n`)
                return
            }

    }
}}