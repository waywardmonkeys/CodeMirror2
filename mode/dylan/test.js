// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function() {
  var mode = CodeMirror.getMode({indentUnit: 2}, "dylan");
  function MT(name) { test.mode(name, mode, Array.prototype.slice.call(arguments, 1)); }

  MT('comments',
     '[comment // This is a line comment]',
     '[comment /* This is a block comment */]',
     '[comment /* This is a multi]',
     '[comment line comment]',
     '[comment */]',
     '[comment /* And this is a /*]',
     '[comment /* nested */ comment */]');

  MT('unary_operators',
     '[operator -][variable a]',
     '[operator -] [variable a]',
     '[operator ~][variable a]',
     '[operator ~] [variable a]');

  MT('binary_operators',
     '[variable a] [operator +] [variable b]',
     '[variable a] [operator -] [variable b]',
     '[variable a] [operator *] [variable b]',
     '[variable a] [operator /] [variable b]',
     '[variable a] [operator ^] [variable b]',
     '[variable a] [operator =] [variable b]',
     '[variable a] [operator ==] [variable b]',
     '[variable a] [operator ~=] [variable b]',
     '[variable a] [operator ~==] [variable b]',
     '[variable a] [operator <] [variable b]',
     '[variable a] [operator <=] [variable b]',
     '[variable a] [operator >] [variable b]',
     '[variable a] [operator >=] [variable b]',
     '[variable a] [operator &] [variable b]',
     '[variable a] [operator |] [variable b]',
     '[variable a] [operator :=] [variable b]');

  MT('integers',
     '[number 1]',
     '[number 123]',
     '[number -123]',
     '[number +456]',
     '[number #b010]',
     '[number #o073]',
     '[number #xabcDEF123]');

  MT('floats',
     '[number .3]',
     '[number -1.]',
     '[number -2.335]',
     '[number +3.78d1]',
     '[number 3.78s-1]',
     '[number -3.32e+5]');
})();
