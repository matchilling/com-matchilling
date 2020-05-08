webpackJsonp([0xd1693b48fa72],{356:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Mathias Schilling - Just another paper cut survivor and software engineer",author:"Mathias Schilling"}},markdownRemark:{id:"/Users/matchilling/dev/com.github/matchilling/com.matchilling.www/src/pages/article/2020-05-03-setting-auto-generated-ids-manually-in-hibernate/index.md absPath of file >>> MarkdownRemark",html:'<p>In this tutorial, you will learn how to implement a custom <code class="language-text">IdentifierGenerator</code> to support auto-generated and manually assigned Ids using Hibernate.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUCAwb/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAbWo3Gd6BCOxklmij//EAB0QAAAFBQAAAAAAAAAAAAAAAAABAgMSBBAUIzH/2gAIAQEAAQUCvJyJVa0jNMJ68Wsf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHRAAAQQCAwAAAAAAAAAAAAAAAQACEBEhIjJBUf/aAAgBAQAGPwKTsL8WRa4tgv7j/8QAHBAAAwEAAgMAAAAAAAAAAAAAAAEhETFBUWHw/9oACAEBAAE/IU0J+ClRQxDaz9Gfex32E4IuVdnNP//aAAwDAQACAAMAAAAQ7+e+/8QAFREBAQAAAAAAAAAAAAAAAAAAEAH/2gAIAQMBAT8QKf/EABYRAQEBAAAAAAAAAAAAAAAAAAEQMf/aAAgBAgEBPxAhs//EABwQAQACAgMBAAAAAAAAAAAAAAEAESFRMUGBcf/aAAgBAQABPxAPZAdvkvRgrVdRwe9sqD/DQ0+VALsM6hDy4WHvdcepQRcpP//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Alfredo Jaar - ¿Es usted feliz?, Tate Modern London © matchilling"\n        title="Alfredo Jaar - ¿Es usted feliz?, Tate Modern London © matchilling"\n        src="/static/alfredo-jaar-es-usted-feliz-0802307526c55f2a0fe997e989b0bfdb-631b1.jpg"\n        srcset="/static/alfredo-jaar-es-usted-feliz-0802307526c55f2a0fe997e989b0bfdb-30fbd.jpg 200w,\n/static/alfredo-jaar-es-usted-feliz-0802307526c55f2a0fe997e989b0bfdb-e87dc.jpg 400w,\n/static/alfredo-jaar-es-usted-feliz-0802307526c55f2a0fe997e989b0bfdb-631b1.jpg 800w,\n/static/alfredo-jaar-es-usted-feliz-0802307526c55f2a0fe997e989b0bfdb-300e3.jpg 1200w,\n/static/alfredo-jaar-es-usted-feliz-0802307526c55f2a0fe997e989b0bfdb-c15ef.jpg 1600w,\n/static/alfredo-jaar-es-usted-feliz-0802307526c55f2a0fe997e989b0bfdb-3a622.jpg 2400w,\n/static/alfredo-jaar-es-usted-feliz-0802307526c55f2a0fe997e989b0bfdb-bf04e.jpg 2662w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n<em>Alfredo Jaar - ¿Es usted feliz?, Tate Modern London © <a href="https://www.instagram.com/p/B_af_AZpQo3/">matchilling</a></em></p>\n<p>When it comes to picking the right id generation strategy for your technical keys, you have primarily two major choices in Hibernate.</p>\n<ul>\n<li>Use auto-generated values and let Hibernate or the underlying database engine generate those identifiers for you, or</li>\n<li>Generate all ids yourself with the help of the <a href="https://docs.jboss.org/hibernate/orm/current/javadocs/org/hibernate/id/Assigned.html"><code class="language-text">Assigned</code> class</a>.</li>\n</ul>\n<p>However, a third approach which is a mixture of both foresaid strategies is not supported out-of-the-box by Hibernate.</p>\n<p>In some scenarios, it might be helpful to let Hibernate or the underlying database engine generate keys most of the time, but also support manual assignments.</p>\n<h2>Custom IdentifierGenerator</h2>\n<p>To have the best of both worlds, we only have to provide our own implementation of the <a href="https://docs.jboss.org/hibernate/orm/current/javadocs/org/hibernate/id/IdentifierGenerator.html"><code class="language-text">IdentifierGenerator</code> interface</a>, which specifies two methods, <code class="language-text">generate</code> and <code class="language-text">supportsJdbcBatchInserts</code>.</p>\n<p>Here is an example implementation in Kotlin:</p>\n<div class="gatsby-highlight">\n      <pre class="language-kotlin"><code class="language-kotlin"><span class="token keyword">package</span> com<span class="token punctuation">.</span>matchilling<span class="token punctuation">.</span>lib<span class="token punctuation">.</span>hibernate\n\n<span class="token keyword">import</span> org<span class="token punctuation">.</span>hibernate<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>spi<span class="token punctuation">.</span>SharedSessionContractImplementor\n<span class="token keyword">import</span> org<span class="token punctuation">.</span>hibernate<span class="token punctuation">.</span>id<span class="token punctuation">.</span>IdentifierGenerator\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>Serializable\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token operator">*</span>\n<span class="token keyword">import</span> kotlin<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span>full<span class="token punctuation">.</span>declaredMemberProperties\n<span class="token keyword">import</span> kotlin<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span>jvm<span class="token punctuation">.</span>javaType\n\n<span class="token keyword">class</span> UuidGenerator <span class="token operator">:</span> IdentifierGenerator <span class="token punctuation">{</span>\n\n    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">generate</span><span class="token punctuation">(</span>\n            session<span class="token operator">:</span> SharedSessionContractImplementor<span class="token operator">?</span><span class="token punctuation">,</span>\n            instance<span class="token operator">:</span> Any<span class="token operator">?</span>\n    <span class="token punctuation">)</span><span class="token operator">:</span> Serializable <span class="token punctuation">{</span>\n        <span class="token keyword">val</span> id <span class="token operator">=</span> instance<span class="token operator">!!</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">.</span>declaredMemberProperties<span class="token punctuation">.</span><span class="token function">find</span> <span class="token punctuation">{</span>\n            it<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">"id"</span> <span class="token operator">&amp;&amp;</span> it<span class="token punctuation">.</span>returnType<span class="token punctuation">.</span>javaType<span class="token punctuation">.</span>typeName <span class="token operator">==</span> UUID<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">.</span>java<span class="token punctuation">.</span>canonicalName\n        <span class="token punctuation">}</span><span class="token operator">?</span><span class="token punctuation">.</span>getter<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>\n\n        <span class="token keyword">return</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>id <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            id <span class="token keyword">as</span> UUID\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            UUID<span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">companion</span> <span class="token keyword">object</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> <span class="token keyword">val</span> NAME <span class="token operator">=</span> <span class="token string">"uuid"</span>\n        <span class="token keyword">const</span> <span class="token keyword">val</span> STRATEGY <span class="token operator">=</span> <span class="token string">"com.matchilling.lib.hibernate.UuidGenerator"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2>Usage</h2>\n<p>With the new <code class="language-text">UuidGenerator</code> class in place, we can now annotate our entity class accordingly and start using the generator.</p>\n<div class="gatsby-highlight">\n      <pre class="language-kotlin"><code class="language-kotlin"><span class="token annotation builtin">@Entity</span>\n<span class="token keyword">data</span> <span class="token keyword">class</span> <span class="token function">Person</span><span class="token punctuation">(</span>\n\n        <span class="token annotation builtin">@GeneratedValue</span><span class="token punctuation">(</span>generator <span class="token operator">=</span> UuidGenerator<span class="token punctuation">.</span>NAME<span class="token punctuation">)</span>\n        <span class="token annotation builtin">@GenericGenerator</span><span class="token punctuation">(</span>\n            name <span class="token operator">=</span> UuidGenerator<span class="token punctuation">.</span>NAME<span class="token punctuation">,</span>\n            strategy <span class="token operator">=</span> UuidGenerator<span class="token punctuation">.</span>STRATEGY\n        <span class="token punctuation">)</span>\n        <span class="token annotation builtin">@Id</span>\n        <span class="token keyword">val</span> id<span class="token operator">:</span> UUID<span class="token operator">?</span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>I hope you find this tutorial useful. The implementation of the shown example, as well as the companion unit tests, can be found on <a href="https://gist.github.com/matchilling/7ff2a0cdb23b9f205d291b65342a99da">GitHub</a>.</p>',frontmatter:{date:"03 May 2020",hn_id:null,path:"/setting-auto-generated-ids-manually-in-hibernate/",tags:"Hibernate, How-to",title:"How-to: Setting auto-generated Ids manually in Hibernate",description:"In this tutorial, you will learn how to implement a custom IdentifierGenerator to support auto-generated and manually assigned Ids using Hibernate."},wordCount:{words:245}}},pathContext:{path:"/setting-auto-generated-ids-manually-in-hibernate/"}}}});
//# sourceMappingURL=path---setting-auto-generated-ids-manually-in-hibernate-16df67f600b61c48b5ee.js.map