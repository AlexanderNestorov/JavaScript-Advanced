function toStringExtension() {
    class Person {
      constructor(name, email) {
        this.name = name;
        this.email = email;
      }
  
      toString() {
        const className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
      }
    }
  
    class Teacher extends Person {
      constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
      }
  
      toString() {
        let baseStr = super.toString().slice(0, -1);
        return baseStr + `, subject: ${this.subject})`;
      }
    }
  
    class Student extends Person {
      constructor(name, email, course) {
        super(name, email);
        this.course = course;
      }
  
      toString() {
        let baseStr = super.toString().slice(0, -1);
        return baseStr + `, course: ${this.course})`;
      }
    }
  
    return {
      Person,
      Teacher,
      Student
    };
  }