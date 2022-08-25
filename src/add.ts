interface MyStorage<T> {
  // 인터페이스
  [key: string]: T;
}

class LocalStorage<T> {
  // 클래스, generic의 상속
  private Storage: MyStorage<T> = {};
  set(key: string, value: T) {
    this.Storage[key] = value;
  }
  remove(key: string) {
    delete this.Storage[key];
  }
  get(key: string): T {
    return this.Storage[key];
  }
  clear() {
    this.Storage = {};
  }
}

const stringStorage = new LocalStorage<String>(); // 다형성
stringStorage.get('x');
stringStorage.set('hello', 'hi');

const booleanStorage = new LocalStorage<Boolean>();
booleanStorage.get('x');
booleanStorage.set('hello', true);
