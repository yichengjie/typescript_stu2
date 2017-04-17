class Control {
    private state: any;
}

interface SelectableControl extends A {
    select(): void;
}

class Button extends Control {
    select() { }
}

class TextBox extends Control {
    select() { }
}

class A {
    select() { }
}

class B {
    select() { }
}