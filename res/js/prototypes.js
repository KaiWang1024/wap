String.prototype.filter = function (banned) {
    return this.split(' ')
    .filter(function (word) {
        return word !== banned;
    })
    .join(' ');
};

console.log("This house is not nice!".filter('not'));

Array.prototype.bubbleSort = function () {
    let tmp;
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] > this[j]) {
                tmp = this[i];
                this[i] = this[j];
                this[j] = tmp;
            }
        }
    }
    return this;
}

console.log([6,4,0, 3,-2,1].bubbleSort());

const Person = function (name) {
    this.name = name;
};

const Teacher = function (name) {
    Person.call(this, name);
}

Teacher.prototype.teach = function (course) {
    console.log(this.name + ' is now teaching ' + course);
}

const teacher = new Teacher('Tina');
teacher.teach('WAP');

const Person1 = {
    name: ''
}

const Teacher1 = Object.create(Person1);
Teacher1.teach = function (course) {
    console.log(this.name + ' is now teaching ' + course);
}
const tod = Object.create(Teacher1);
tod.name = "Tod";
tod.teach("ASD");

(function() {
    const Person = {
        name: '',
        age: 0,
        greeting: function () {
            console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
        },
        salute: function () {
            console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!');
        }
    };
    const Student = Object.create(Person);
    Student.major = '';
    Student.greeting = function () {
        console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
    }

    const student = Object.create(Student);
    student.name = 'Kyle';
    student.age = 21;
    student.major = 'CS';
    student.greeting();
    student.salute();

    const Professor = Object.create(Person);
    Professor.department = '';
    Professor.salute = function () {
        console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
    }

    const professor = Object.create(Professor);
    professor.name = 'Saad';
    professor.age = 40;
    professor.department = 'Faculty';
    professor.greeting();
    professor.salute();
})();
   
(function () {
    const Person = function (name, age) {
        this.name = name;
        this.age = age;
    };
    Person.prototype.greeting = function () {
        console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
    };
    Person.prototype.salute = function () {
        console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!');
    };

    const Student = function (name, age, major) {
        Person.call(this, name, age);
        this.major = major;
    }
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.greeting = function () {
        console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
    };

    const student = new Student('Mike', 22, 'CS');
    student.greeting();
    student.salute();

    const Professor = function (name, age, department) {
        Person.call(this, name, age);
        this.department = department;
    }
    Professor.prototype = Object.create(Person.prototype);
    Professor.prototype.salute = function () {
        console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
    };

    const professor = new Professor('Arther', 56, 'Faculty');
    professor.greeting();
    professor.salute();
})();