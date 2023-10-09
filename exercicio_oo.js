function Employee(name, age, id){

    this.name = name;
    this.age = age;
    this.id = id;

    this.sayName = ()=>{
        console.log(`Funcionário ${this.name} tem idade ${this.age} anos e tem id de: ${this.id}`);
    }
}

function SoftwareEngineer(name, age, id,salary){

    this.salary = salary;

    this.sayInformation= ()=>{
        console.log(`Engenheiro de software ${this.name} tem idade ${this.age} anos, tem id de: ${this.id} e recebe ${salary} de salario`);
    }

    Employee.call(this, name, age, id)
}

function Designer(name, age, id, salary){

    this.salary = salary;

    this.sayInformation = ()=>{
        console.log(`Designer ${this.name} tem idade ${this.age} anos, tem id de: ${this.id} e recebe ${salary} de salario`);
    }

    Employee.call(this, name,age,id)
}

function Seller(name, age, id, salary, meta){
    this.salary = salary;
    this.meta = meta;

    this.sayInformation=()=>{
        console.log(`Vendedor ${this.name} tem idade ${this.age} anos, tem id de: ${this.id} e recebe ${salary} de salario e tem uma meta de ${meta} em vendas mensais`);
    }

    Employee.call(this, name,age,id)

}


const engenheiro1 = new SoftwareEngineer('leo', 25, '1234', 10000)
engenheiro1.sayInformation();

const designer1 = new Designer('bia', 30, '456', 1000)
designer1.sayInformation();

const seller1 = new Seller('joão', 45, 'qwe', 2000, 500)
seller1.sayInformation();