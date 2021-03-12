import{c as t,o as e,A as d}from"./vendor.27122b45.js";const a={class:"markdown-body"},n=d('<h1>Rate 评分</h1><h3>介绍</h3><p>用于快速的评级操作，或对评价进行展示。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Rate } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Rate);\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html">    &lt;nut-rate \n        v-model:value=&quot;state.val&quot;\n    &gt;\n    &lt;/nut-rate&gt;\n</code></pre><h3>自定义icon</h3><pre><code class="language-html">    &lt;nut-rate\n        checked-icon=&quot;heart-fill1&quot;\n        unchecked-icon=&quot;heart&quot;\n        v-model:value=&quot;state.val3&quot;\n    &gt;\n    &lt;/nut-rate&gt;\n</code></pre><h3>自定义数量</h3><pre><code class="language-html">    &lt;nut-rate \n        :total=&quot;6&quot; \n        v-model:value=&quot;state.val4&quot;\n    &gt;\n    &lt;/nut-rate&gt;\n</code></pre><h3>自定义颜色</h3><pre><code class="language-html">    &lt;nut-rate \n        active-color=&quot;#FFC800&quot; \n        v-model:value=&quot;state.val5&quot;\n    &gt;\n    &lt;/nut-rate&gt;\n</code></pre><h3>禁用状态</h3><pre><code class="language-html">    &lt;nut-rate \n        :disabled=&quot;true&quot; \n        v-model:value=&quot;state.val6&quot;\n    &gt;\n    &lt;/nut-rate&gt;\n</code></pre><h3>只读</h3><pre><code class="language-html">&lt;nut-rate \n    v-model:value=&quot;val&quot;\n    :readOnly=&quot;true&quot;\n&gt;\n&lt;/nut-rate&gt;\n</code></pre><h3>绑定事件</h3><pre><code class="language-html">&lt;nut-rate \n    @click=&quot;onClick&quot;\n&gt;\n&lt;/nut-rate&gt;\n</code></pre><h3>自定义尺寸</h3><pre><code class="language-html">&lt;nut-rate \n    :size=&quot;35&quot;\n&gt;\n&lt;/nut-rate&gt;\n</code></pre><h2>Prop</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>total</td><td>star 总数</td><td>Number</td><td>5</td></tr><tr><td>value</td><td>当前 star 数，可使用 v-model 双向绑定数据</td><td>Number</td><td>0</td></tr><tr><td>size</td><td>star 大小</td><td>Number</td><td>25</td></tr><tr><td>spacing</td><td>两个star的间距</td><td>Number</td><td>20</td></tr><tr><td>read-only</td><td>是否只读</td><td>Boolean</td><td>false</td></tr><tr><td>unchecked-icon</td><td>使用图标(未选中)</td><td>String</td><td>-</td></tr><tr><td>checked-icon</td><td>使用图标(选中)</td><td>String</td><td>-</td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击star时触发</td><td>star的index</td></tr></tbody></table>',26),r={expose:[],setup:d=>(d,r)=>(e(),t("div",a,[n]))};export default r;
