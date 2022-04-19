// 문자열 타입
+''       // 0
+'0'      // 0
+'1'      // 1
+'string' // NaN

// 불리언 타입
+true  // 1
+false // 0

// null 타입
+null // 0

// undefined 타입
+undefined // NaN

// 심벌 타입
+Sylbol() // TypeError: Cannot covert a Symbol value to a string

// 객체 타입
+{}             // NaN
+[]             // 0
+[10, 20]       // NaN
+(function(){}) // NaN