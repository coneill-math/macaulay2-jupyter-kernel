define([
    'codemirror/lib/codemirror',
    'codemirror/addon/mode/simple'
], function (CodeMirror) {
    'use strict';
    
    // see https://codemirror.net/demo/simplemode.html

    CodeMirror.defineSimpleMode("macaulay2", {
        start: [
            {regex: /"(?:[^\\]|\\.)*?(?:"|$)/, token: "string"},
            {regex: /(then|do|list|in|break|continue|not|and|or|return)\b/, token: "keyword"},
            {regex: /(from|to)\b/, token: "builtin"},
            {regex: /(true|false|null)\b/, token: "atom"},
            {regex: /(for|while|if|else)\b/, token: "keyword", indent: true},

            /* testing */

            /* symbols from M2-symbols.el here */
            {regex: /(and|break|catch|continue|do|else|for|from|global|if|in|list|local|new|not|of|or|return|shield|SPACE|step|symbol|then|threadVariable|throw|time|timing|to|try|when|while)\b/,
                token: "keyword"},
            {regex: /(Adjacent|AffineVariety|Analyzer|ANCHOR|Array|AssociativeExpression|Bag|BasicList|BettiTally|BinaryOperation|BLOCKQUOTE|BODY|BOLD|Boolean|BR|CacheFunction|CacheTable|CC|CDATA|ChainComplex|ChainComplexMap|CODE|CoherentSheaf|Command|COMMENT|CompiledFunction|CompiledFunctionBody|CompiledFunctionClosure|ComplexField|Constant|Database|DD|Descent|Describe|Dictionary|DIV|DIV1|Divide|DL|DocumentTag|DT|Eliminate|EM|EngineRing|Equation|ExampleItem|Expression|File|FilePosition|ForestNode|FractionField|Function|FunctionApplication|FunctionBody|FunctionClosure|GaloisField|GeneralOrderedMonoid|GlobalDictionary|GradedModule|GradedModuleMap|GroebnerBasis|GroebnerBasisOptions|HashTable|HEAD|HEADER1|HEADER2|HEADER3|HEADER4|HEADER5|HEADER6|HeaderType|Holder|HR|HREF|HTML|Hybrid|Hypertext|HypertextContainer|HypertextParagraph|Ideal|IMG|ImmutableType|IndeterminateNumber|IndexedVariable|IndexedVariableTable|InexactField|InexactFieldFamily|InexactNumber|InfiniteNumber|IntermediateMarkUpType|ITALIC|Keyword|LABEL|LATER|LI|LINK|List|LITERAL|LocalDictionary|LocalRing|LowerBound|Manipulator|MapExpression|MarkUpType|MarkUpTypeWithOptions|Matrix|MatrixDegreeExpression|MatrixExpression|MENU|META|MethodFunction|MethodFunctionBinary|MethodFunctionSingle|MethodFunctionWithOptions|Minus|Module|ModuleMap|Monoid|MonoidElement|MonomialIdeal|MutableHashTable|MutableList|MutableMatrix|Net|NetFile|NonAssociativeProduct|Nothing|Number|NumberedVerticalList|OneExpression|Option|OptionTable|OrderedMonoid|Package|PARA|Parenthesize|Parser|Partition|PolynomialRing|Power|PRE|Product|ProductOrder|ProjectiveHilbertPolynomial|ProjectiveVariety|Pseudocode|PushforwardComputation|QQ|QuotientRing|RealField|Resolution|Ring|RingElement|RingFamily|RingMap|RowExpression|RR|ScriptedFunctor|SelfInitializingType|Sequence|Set|SheafExpression|SheafOfRings|SMALL|SPAN|SparseMonomialVectorExpression|SparseVectorExpression|String|STRONG|STYLE|SUB|Subscript|SUBSECTION|Sum|SumOfTwists|SUP|Superscript|Symbol|SymbolBody|TABLE|Table|Tally|Task|TD|TEX|Thing|Time|TITLE|TO|TO2|TOH|TR|TreeNode|TT|Type|UL|URL|Variety|Vector|VectorExpression|VerticalList|VirtualTally|VisibleList|WrapperType|ZeroExpression|ZZ)\b/,
                token: "tag"},
            {regex: /(about|abs|accumulate|acos|acosh|acot|addCancelTask|addDependencyTask|addEndFunction|addHook|addStartFunction|addStartTask|adjoint|agm|alarm|all|ambient|analyticSpread|ancestor|ancestors|andP|ann|annihilator|antipode|any|append|applicationDirectory|apply|applyKeys|applyPairs|applyTable|applyValues|apropos|ascii|asin|asinh|ass|assert|associatedGradedRing|associatedPrimes|atan|atan2|atEndOfFile|autoload|baseFilename|baseName|basis|beginDocumentation|benchmark|BesselJ|BesselY|betti|between|binomial|borel|cacheValue|cancelTask|capture|ceiling|centerString|chainComplex|char|characters|charAnalyzer|check|chi|class|clean|clearEcho|code|codim|coefficient|coefficientRing|coefficients|cohomology|coimage|coker|cokernel|collectGarbage|columnAdd|columnate|columnMult|columnPermute|columnRankProfile|columnSwap|combine|commandInterpreter|commonest|commonRing|comodule|complement|complete|components|compose|compositions|compress|concatenate|conductor|cone|conjugate|connectionCount|constParser|content|contract|conwayPolynomial|copy|copyDirectory|copyFile|cos|cosh|cot|cotangentSheaf|coth|cover|coverMap|cpuTime|createTask|csc|csch|currentDirectory|currentLineNumber|currentTime|deadParser|debug|debugError|decompose|deepSplice|default|degree|degreeLength|degrees|degreesMonoid|degreesRing|delete|demark|denominator|depth|describe|det|determinant|diagonalMatrix|dictionary|diff|difference|dim|directSum|disassemble|discriminant|dismiss|distinguished|divideByVariable|doc|document|drop|dual|dumpdata|eagonNorthcott|echoOff|echoOn|eigenvalues|eigenvectors|eint|elements|eliminate|End|endPackage|entries|erase|erf|erfc|error|euler|eulers|even|EXAMPLE|examples|exec|exp|expectedReesIdeal|expm1|exponents|export|exportFrom|exportMutable|expression|extend|exteriorPower|factor|Fano|fileExecutable|fileExists|fileLength|fileMode|fileReadable|fileTime|fileWritable|fillMatrix|findFiles|findHeft|findSynonyms|first|firstkey|fittingIdeal|flagLookup|flatten|flattenRing|flip|floor|fold|forceGB|fork|format|frac|fraction|frames|fromDividedPowers|fromDual|functionBody|futureParser|Gamma|gb|gbRemove|gbSnapshot|gcd|gcdCoefficients|gcdLLL|GCstats|genera|generateAssertions|generator|generators|genericMatrix|genericSkewMatrix|genericSymmetricMatrix|gens|genus|get|getc|getChangeMatrix|getenv|getGlobalSymbol|getNetFile|getNonUnit|getPrimeWithRootOfUnity|getSymbol|getWWW|GF|globalAssign|globalAssignFunction|globalAssignment|globalReleaseFunction|gradedModule|gradedModuleMap|gramm|graphIdeal|graphRing|Grassmannian|groebnerBasis|groupID|hash|hashTable|heft|height|hermite|hilbertFunction|hilbertPolynomial|hilbertSeries|hold|Hom|homogenize|homology|homomorphism|horizontalJoin|html|htmlWithTex|httpHeaders|hypertext|icFracP|icFractions|icMap|icPIdeal|ideal|idealizer|identity|image|imaginaryPart|independentSets|index|indices|inducedMap|inducesWellDefinedMap|info|infoHelp|input|insert|installAssignmentMethod|installedPackages|installHilbertFunction|installMethod|installPackage|instance|instances|integralClosure|integralClosures|integrate|intersect|intersectInP|inverse|inversePermutation|inverseSystem|irreducibleCharacteristicSeries|irreducibleDecomposition|isAffineRing|isANumber|isBorel|isCanceled|isCommutative|isConstant|isDirectory|isDirectSum|isField|isFinite|isFinitePrimeField|isFreeModule|isGlobalSymbol|isHomogeneous|isIdeal|isInfinite|isInjective|isInputFile|isIsomorphism|isLinearType|isListener|isLLL|isModule|isMonomialIdeal|isNormal|isOpen|isOutputFile|isPolynomialRing|isPrimary|isPrime|isPrimitive|isPseudoprime|isQuotientModule|isQuotientOf|isQuotientRing|isReady|isReal|isReduction|isRegularFile|isRing|isSkewCommutative|isSorted|isSquareFree|isStandardGradedPolynomialRing|isSubmodule|isSubquotient|isSubset|isSurjective|isTable|isUnit|isWellDefined|isWeylAlgebra|jacobian|jacobianDual|join|ker|kernel|kernelLLL|keys|kill|koszul|last|lcm|leadCoefficient|leadComponent|leadMonomial|leadTerm|length|letterParser|lift|liftable|limitFiles|limitProcesses|lines|linkFile|listForm|listSymbols|LLL|lngamma|load|loaddata|loadPackage|localDictionaries|localize|localRing|locate|log|log1p|lookup|lookupCount|LUdecomposition|makeDirectory|makeDocumentTag|makePackageIndex|makeS2|map|markedGB|match|mathML|matrix|max|maxPosition|member|memoize|merge|mergePairs|method|methodOptions|methods|min|mingens|mingle|minimalBetti|minimalPresentation|minimalPrimes|minimalReduction|minimizeFilename|minors|minPosition|minPres|minus|mkdir|mod|module|modulo|monoid|monomialCurveIdeal|monomialIdeal|monomials|monomialSubideal|moveFile|multidegree|multidoc|multiplicity|mutable|mutableIdentity|mutableMatrix|needs|needsPackage|net|netList|newClass|newCoordinateSystem|newNetFile|newPackage|newRing|nextkey|nextPrime|NNParser|nonspaceAnalyzer|norm|normalCone|notImplemented|nullhomotopy|nullParser|nullSpace|number|numcols|numColumns|numerator|numeric|numgens|numRows|numrows|odd|ofClass|on|openDatabase|openDatabaseOut|openFiles|openIn|openInOut|openListener|openOut|openOutAppend|optionalSignParser|options|optP|orP|override|pack|package|packageTemplate|pad|pager|pairs|parent|part|partition|partitions|parts|pdim|peek|permanents|permutations|pfaffians|pivots|plus|poincare|poincareN|polarize|poly|position|positions|power|powermod|precision|preimage|prepend|presentation|pretty|primaryComponent|primaryDecomposition|print|printString|processID|product|profile|Proj|projectiveHilbertPolynomial|promote|protect|prune|pseudocode|pseudoRemainder|pushForward|QQParser|QRDecomposition|quotient|quotientRemainder|radical|random|randomKRationalPoint|randomMutableMatrix|rank|read|readDirectory|readlink|realPart|realpath|recursionDepth|reduceHilbert|reductionNumber|reesAlgebra|reesAlgebraIdeal|reesIdeal|regex|registerFinalizer|regularity|relations|relativizeFilename|remainder|remove|removeDirectory|removeFile|removeHook|removeLowestDimension|reorganize|replace|res|reshape|resolution|resultant|reverse|ring|ringFromFractions|roots|rotate|round|rowAdd|rowMult|rowPermute|rowRankProfile|rowSwap|rsort|run|runHooks|runLengthEncode|same|saturate|scan|scanKeys|scanLines|scanPairs|scanValues|schedule|schreyerOrder|Schubert|searchPath|sec|sech|seeParsing|select|selectInSubring|selectVariables|separate|separateRegexp|sequence|serialNumber|set|setEcho|setGroupID|setIOExclusive|setIOSynchronized|setIOUnSynchronized|setRandomSeed|setup|setupEmacs|sheaf|sheafHom|show|showHtml|showTex|simpleDocFrob|sin|singularLocus|sinh|size|size2|sleep|smithNormalForm|solve|someTerms|sort|sortColumns|source|Spec|specialFiber|specialFiberIdeal|splice|splitWWW|sqrt|stack|standardForm|standardPairs|stashValue|status|sub|sublists|submatrix|submatrixByDegrees|subquotient|subsets|substitute|substring|subtable|sum|super|support|SVD|switch|sylvesterMatrix|symbolBody|symlinkDirectory|symlinkFile|symmetricAlgebra|symmetricAlgebraIdeal|symmetricKernel|symmetricPower|synonym|SYNOPSIS|syz|syzygyScheme|table|take|tally|tan|tangentCone|tangentSheaf|tanh|target|taskResult|temporaryFileName|tensor|tensorAssociativity|terminalParser|terms|TEST|tex|texMath|times|toAbsolutePath|toCC|toDividedPowers|toDual|toExternalString|toField|toList|toLower|top|topCoefficients|topComponents|toRR|toSequence|toString|toUpper|trace|transpose|trim|truncate|truncateOutput|tutorial|ultimate|unbag|uncurry|undocumented|uniform|uninstallAllPackages|uninstallPackage|unique|unsequence|unstack|use|userSymbols|utf8|utf8check|validate|value|values|variety|vars|vector|versalEmbedding|wait|wedgeProduct|weightRange|whichGm|width|Wikipedia|wrap|xor|youngest|zero|zeta|ZZParser)\b/,
                token: "def"},

            {regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i, token: "number"},
            {regex: /[\{\[\(]/, indent: true},
            {regex: /[\}\]\);]/, dedent: true},
            {regex: /[a-z$][\w$]*/, token: "variable"},
            {regex: /^\s*--%.*/, token: "comment meta"},
            {regex: /--.*/, token: "comment"},
        ],
        meta: {
            lineComment: "--"
        }
    });
    CodeMirror.defineMIME('text/x-macaulay2', 'macaulay2');
});
