import * as Rx  from '@reactivex/rxjs';

Rx.Observable.of('hello world')
  .subscribe(function(x) { console.log(x); });