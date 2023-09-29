(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{450:function(n,i,t){"use strict";t.r(i);var a=t(2),r=Object(a.a)({},(function(){var n=this,i=n._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[i("p",[n._v("只走一次\nf[i,j]表示所有从（1，1）走到（i，j）的路径的最大值\nf(i,j)=max(f[i-1,j]+w[i,j],f[i,j-1]+w[i,j]);")]),n._v(" "),i("p",[n._v("走两次：\nf[i1,j1,i2,j2]表示所有从（1，1）到（i1，j1)  (i2,j2)的路径的最大值")]),n._v(" "),i("ul",[i("li",[n._v("如何处理“同一个格子不能重复选择”\n只有在i1+j1 == i2+j2  时，两条路经的格子才可能重合")])]),n._v(" "),i("p",[n._v("f(k,i1,i2)表示所有从（1，1）分别走到（i1,k-i1)  (i2,,k-i2)的路径的最大值")]),n._v(" "),i("p",[n._v("![[Drawing 2022-09-04 21.48.36.excalidraw]]")]),n._v(" "),i("p",[n._v("k表示两条路线横纵坐标之和")]),n._v(" "),i("ul",[i("li",[n._v("[ ] （1，1）----》（i1-1,j1) ----\x3e (i1,j1)")]),n._v(" "),i("li",[n._v("[ ] （1，1）----》（i2-1,j2) ----\x3e (i2,j2)")])]),n._v(" "),i("div",{staticClass:"language-C++ extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v('#include<iostream>\n#include<alhgorithm>\nusing namespace std;\nconst int N=15;\nint n;\nint w[N][N];\nint f[N*2][N][N];\n\nint main()\n{\nscanf("%d",&n);\n\nint a,b,c;\nwhile(cin>>a>>b>>c,a||b||c)w[a][b]=c;\n\nfor(int k=2;k<=n+n;k++)\n{\n\nfor(int i1=1;i1<=n;i1++)\nfor(int i2=1;i2<=n;i2++)\n{\nint j1=k-i1,j2=k-i2;\nif(j1>=1&&j1<=n&&j2>=1&&j2<=n)\n{\n\nint t=w[i1][j1];\nif(i1!=i2)t+=w[i2][j2];\nint &x=f[k][i1][i2]\nx=max(x,f[k-1][i1-1][i2-1]+t);\nx=max(x,f[k-1][i1-1][i2]+t;);\nx=max(x,f[k-1][i1][i2-1]+t);\nx=max(x,f[k-1][i1][i2]+t);\n\n}\n}\n\n}\nprintf("%d",f[n+n][n][n]);\n}\n\n\n')])])]),i("h2",{attrs:{id:"编辑距离"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#编辑距离"}},[n._v("#")]),n._v(" 编辑距离")]),n._v(" "),i("p",[n._v("给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。")]),n._v(" "),i("p",[n._v("你可以对一个单词进行如下三种操作：")]),n._v(" "),i("p",[n._v("插入一个字符"),i("br"),n._v("\n删除一个字符"),i("br"),n._v("\n替换一个字符")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v("示例 1：\n\n输入：word1 = \"horse\", word2 = \"ros\"\n输出：3\n解释：\nhorse -> rorse (将 'h' 替换为 'r')\nrorse -> rose (删除 'r')\nrose -> ros (删除 'e')\n\n示例 2：\n\n输入：word1 = \"intention\", word2 = \"execution\"\n输出：5\n解释：\nintention -> inention (删除 't')\ninention -> enention (将 'i' 替换为 'e')\nenention -> exention (将 'n' 替换为 'x')\nexention -> exection (将 'n' 替换为 'c')\nexection -> execution (插入 'u')\n")])])]),i("h4",{attrs:{id:"dp"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dp"}},[n._v("#")]),n._v(" DP")]),n._v(" "),i("p",[n._v("{")]),n._v(" "),i("h6",{attrs:{id:"状态表示f-i-j"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#状态表示f-i-j"}},[n._v("#")]),n._v(" 状态表示f(i,j)")]),n._v(" "),i("p",[n._v("{")]),n._v(" "),i("h6",{attrs:{id:"集合-a-1-i-变成b-1-j-的所有按顺序的方案"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#集合-a-1-i-变成b-1-j-的所有按顺序的方案"}},[n._v("#")]),n._v(" 集合 A[1~i] 变成B[1~j]的所有按顺序的方案")]),n._v(" "),i("h6",{attrs:{id:"属性min"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#属性min"}},[n._v("#")]),n._v(" 属性min")]),n._v(" "),i("p",[n._v("}")]),n._v(" "),i("h6",{attrs:{id:"状态计算"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#状态计算"}},[n._v("#")]),n._v(" 状态计算:")]),n._v(" "),i("p",[n._v("![[Drawing 2022-09-07 22.16.21.excalidraw]]\n}")]),n._v(" "),i("div",{staticClass:"language-c++ extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v("class Solution {\n\npublic:\n\n    int minDistance(string a, string b) {\n\nint n=a.size(),m=b.size();\n\na=' '+a,b=' '+b;\n\nvector<vector<int>>f(n+1,vector<int>(m+1,1e8));\n\nfor(int i=0;i<=n;i++)f[i][0]=i;\n\nfor(int i=1;i<=m;i++)f[0][i]=i;\n\n  \n\nfor(int i=1;i<=n;i++)\n\nfor(int j=1;j<=m;j++)\n\n{\n\n    f[i][j]=min(f[i-1][j],f[i][j-1])+1;\n\n    int t=a[i]!=b[j];\n\n    f[i][j]=min(f[i][j],f[i-1][j-1]+t);\n\n}\n\nreturn f[n][m];\n\n    }\n\n};\n")])])]),i("h2",{attrs:{id:"最大序列和"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#最大序列和"}},[n._v("#")]),n._v(" 最大序列和")]),n._v(" "),i("p",[n._v("f(i)表示所有以num[i]结尾的区间中的最大和是多少")]),n._v(" "),i("p",[n._v("![[未命名 1 2022-09-08 14.31.40.excalidraw]]")]),n._v(" "),i("div",{staticClass:"language-c++ extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v("class Solution {\n\npublic:\n\n    int maxSubArray(vector<int>& nums) {\n\n        int res=INT_MIN;\n\n        for(int i=0,last=0;i<nums.size();i++)\n\n        {\n\n            last=nums[i]+max(last,0);\n\n            res=max(res,last);\n\n        }\n\n        return res;\n\n  \n  \n  \n  \n  \n\n    }\n\n};\n")])])]),i("h3",{attrs:{id:"进阶做法-分治"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#进阶做法-分治"}},[n._v("#")]),n._v(" 进阶做法：分治")])])}),[],!1,null,null,null);i.default=r.exports}}]);