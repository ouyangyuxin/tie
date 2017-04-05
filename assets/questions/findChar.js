// Copyright 2017 The TIE Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Question data for Reverse Words.
 */

globalData.questions['findChar'] = {
  // eslint-disable-line dot-notation
  title: 'Find the first character in a string that doesn\'t repeat',
  starterCode: {
    python: `def reverseWords(str):
    return ""
`
  },
  auxiliaryCode: {
    python: `class AuxiliaryCode(object):
`
  },
  tasks: [
    {
      instructions: [
        [
          'For this question, you\'ll implement the reverseWords function. ',
          'This function takes a string of words separated by whitespace and ',
          'reverses the non-whitespace characters in the words, but not the ',
          'words\' ordering. It should also preserve the original whitespace.'
        ].join(''),
        'For instance, \'moo cow bark dog\' would become \'oom woc krab god\'.'
      ],
      prerequisiteSkills: ['Arrays', 'Strings', 'String Manipulation'],
      acquiredSkills: ['String Manipulation'],
      inputFunctionName: null,
      outputFunctionName: null,
      mainFunctionName: 'reverseWords',
      correctnessTests: [
        {input: 'moo cow bark dog', allowedOutputs: ['oom woc krab god']}, {
          input: 'racecar civic kayak mom noon level',
          allowedOutputs: ['racecar civic kayak mom noon level']
        },
        {input: 'I', allowedOutputs: ['I']}, {input: '', allowedOutputs: ['']},
        {input: 'ab', allowedOutputs: ['ba']}
      ],
      buggyOutputTests: [{
        buggyFunctionName: 'AuxiliaryCode.forgetLastWord',
        messages: [
          'Try running your code on \'new code\' on paper. What\'s the result?',
          'Are you sure that you\'re reversing all the words?',
          [
            'It looks like you\'re exiting the function without adding on the ',
            'last reversed word.'
          ].join('')
        ]
      }],
      performanceTests: []
    },
    {
      instructions: [[
        'Next, double-check your code to make sure that it handles ',
        'more than just letters.'
      ].join('')],
      prerequisiteSkills: ['Arrays', 'Strings', 'String Manipulation'],
      acquiredSkills: ['String Manipulation', 'Sets', 'Arrays', 'Maps'],
      inputFunctionName: null,
      outputFunctionName: null,
      mainFunctionName: 'find1stNonRepeatedChar',
      correctnessTests: [
        {input: 'TT AsAs', allowedOutputs: [' ']},
        {input: 'AbCABcBb', allowedOutputs: ['C']},
        {input: 'BB337 7122', allowedOutputs: ['1']},
        {input: 'test11@test', allowedOutputs: ['@']}
      ],
      buggyOutputTests: [],
      performanceTests: [{
        inputDataAtom: 'meow ',
        transformationFunctionName: 'System.extendString',
        expectedPerformance: 'linear',
        evaluationFunctionName: 'find1stNonRepeatedChar'
      }]
    }
  ],
  styleTests: [{
    evaluationFunctionName: 'allowOnlyOneFunction',
    expectedOutput: true,
    message: [
      'You should only be writing code in a find1stNonRepeatedChar function. While ',
      'decomposition is generally a good idea, you shouldn\'t need more than ',
      'just this function for this question.'
    ].join('')
  }]
};
