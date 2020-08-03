const createClassNameTests = [
  { name: 'Test 1', args: ['first'], expected: 'first-class' },
  { name: 'Test 2', args: ['second'], expected: 'second-class' },
  { name: 'Test 3', args: ['third'], expected: 'third-class' },
  { name: 'Test 4', args: ['fourth'], expected: 'fourth-class' },
  { name: 'Test 5', args: ['train'], expected: 'train-class' },
];

function createClassName(which) {
  return which + '-class';
}

testing(createClassName, createClassNameTests);
