"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[82158],{97093:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>f,default:()=>y,frontMatter:()=>u,metadata:()=>m,toc:()=>b});var s=t(87462),n=(t(67294),t(3905)),r=t(26389),a=t(94891),o=(t(75190),t(47507)),d=t(24310),p=t(63303),l=(t(75035),t(85162));const u={id:"find-bpns-by-identifiers",title:"Returns a list of identifier mappings of an identifier to a BPNL/A/S, specified by a business partner type, identifier type and identifier values",description:"Find business partner numbers by identifiers. The response can contain less results than the number of identifier values that were requested, if some of the identifiers did not exist. For a single request, the maximum number of identifier values to search for is limited to ${bpdm.bpn.search-request-limit} entries.",sidebar_label:"Returns a list of identifier mappings of an identifier to a BPNL/A/S, specified by a business partner type, identifier type and identifier values",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Bpn Controller"],description:"Find business partner numbers by identifiers. The response can contain less results than the number of identifier values that were requested, if some of the identifiers did not exist. For a single request, the maximum number of identifier values to search for is limited to ${bpdm.bpn.search-request-limit} entries.",operationId:"findBpnsByIdentifiers",requestBody:{content:{"application/json":{schema:{required:["businessPartnerType","idType","idValues"],type:"object",properties:{businessPartnerType:{type:"string",description:"Specifies if an identifier type is valid for legal entities (L) or addresses (A). Sites (S) are not supported.",enum:["LEGAL_ENTITY","ADDRESS"]},idType:{type:"string",description:"Technical key of the type to which the identifiers belongs to"},idValues:{type:"array",description:"Values of the identifiers",items:{type:"string",description:"Values of the identifiers"}}},description:"Contains identifiers to search legal entities by"}}},required:!0},responses:{200:{description:"Found bpn to identifier value mappings",content:{"application/json":{schema:{uniqueItems:!0,type:"array",items:{required:["bpn","idValue"],type:"object",properties:{idValue:{type:"string",description:"Value of the identifier"},bpn:{type:"string",description:"Business Partner Number"}},description:"Mapping of Business Partner Number to identifier value"}}}}},400:{description:"On malformed request parameters or if number of requested bpns exceeds limit"},404:{description:"Specified identifier type not found"}},method:"post",path:"/v6/bpn/search",servers:[{url:"http://localhost:8080",description:"Generated server url"}],jsonRequestBodyExample:{businessPartnerType:"LEGAL_ENTITY",idType:"string",idValues:["string"]},info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"6.1.0"},postman:{name:"Returns a list of identifier mappings of an identifier to a BPNL/A/S, specified by a business partner type, identifier type and identifier values",description:{content:"Find business partner numbers by identifiers. The response can contain less results than the number of identifier values that were requested, if some of the identifiers did not exist. For a single request, the maximum number of identifier values to search for is limited to ${bpdm.bpn.search-request-limit} entries.",type:"text/plain"},url:{path:["v6","bpn","search"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},f=void 0,m={unversionedId:"kits/Business Partner Kit/Software Development View/Pool Api/find-bpns-by-identifiers",id:"version-24.08/kits/Business Partner Kit/Software Development View/Pool Api/find-bpns-by-identifiers",title:"Returns a list of identifier mappings of an identifier to a BPNL/A/S, specified by a business partner type, identifier type and identifier values",description:"Find business partner numbers by identifiers. The response can contain less results than the number of identifier values that were requested, if some of the identifiers did not exist. For a single request, the maximum number of identifier values to search for is limited to ${bpdm.bpn.search-request-limit} entries.",source:"@site/docs-kits_versioned_docs/version-24.08/kits/Business Partner Kit/Software Development View/Pool Api/find-bpns-by-identifiers.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Pool Api",slug:"/kits/Business Partner Kit/Software Development View/Pool Api/find-bpns-by-identifiers",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/find-bpns-by-identifiers",draft:!1,editUrl:null,tags:[],version:"24.08",frontMatter:{id:"find-bpns-by-identifiers",title:"Returns a list of identifier mappings of an identifier to a BPNL/A/S, specified by a business partner type, identifier type and identifier values",description:"Find business partner numbers by identifiers. The response can contain less results than the number of identifier values that were requested, if some of the identifiers did not exist. For a single request, the maximum number of identifier values to search for is limited to ${bpdm.bpn.search-request-limit} entries.",sidebar_label:"Returns a list of identifier mappings of an identifier to a BPNL/A/S, specified by a business partner type, identifier type and identifier values",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Bpn Controller"],description:"Find business partner numbers by identifiers. The response can contain less results than the number of identifier values that were requested, if some of the identifiers did not exist. For a single request, the maximum number of identifier values to search for is limited to ${bpdm.bpn.search-request-limit} entries.",operationId:"findBpnsByIdentifiers",requestBody:{content:{"application/json":{schema:{required:["businessPartnerType","idType","idValues"],type:"object",properties:{businessPartnerType:{type:"string",description:"Specifies if an identifier type is valid for legal entities (L) or addresses (A). Sites (S) are not supported.",enum:["LEGAL_ENTITY","ADDRESS"]},idType:{type:"string",description:"Technical key of the type to which the identifiers belongs to"},idValues:{type:"array",description:"Values of the identifiers",items:{type:"string",description:"Values of the identifiers"}}},description:"Contains identifiers to search legal entities by"}}},required:!0},responses:{200:{description:"Found bpn to identifier value mappings",content:{"application/json":{schema:{uniqueItems:!0,type:"array",items:{required:["bpn","idValue"],type:"object",properties:{idValue:{type:"string",description:"Value of the identifier"},bpn:{type:"string",description:"Business Partner Number"}},description:"Mapping of Business Partner Number to identifier value"}}}}},400:{description:"On malformed request parameters or if number of requested bpns exceeds limit"},404:{description:"Specified identifier type not found"}},method:"post",path:"/v6/bpn/search",servers:[{url:"http://localhost:8080",description:"Generated server url"}],jsonRequestBodyExample:{businessPartnerType:"LEGAL_ENTITY",idType:"string",idValues:["string"]},info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"6.1.0"},postman:{name:"Returns a list of identifier mappings of an identifier to a BPNL/A/S, specified by a business partner type, identifier type and identifier values",description:{content:"Find business partner numbers by identifiers. The response can contain less results than the number of identifier values that were requested, if some of the identifiers did not exist. For a single request, the maximum number of identifier values to search for is limited to ${bpdm.bpn.search-request-limit} entries.",type:"text/plain"},url:{path:["v6","bpn","search"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"Bpn Controller",permalink:"/docs-kits/category/kits/Business Partner Kit/Software Development View/Pool Api/bpn-controller"},next:{title:"Address Controller",permalink:"/docs-kits/category/kits/Business Partner Kit/Software Development View/Pool Api/address-controller"}},c={},b=[{value:"Returns a list of identifier mappings of an identifier to a BPNL/A/S, specified by a business partner type, identifier type and identifier values",id:"returns-a-list-of-identifier-mappings-of-an-identifier-to-a-bpnlas-specified-by-a-business-partner-type-identifier-type-and-identifier-values",level:2}],h={toc:b};function y(e){let{components:i,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},h,t,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"returns-a-list-of-identifier-mappings-of-an-identifier-to-a-bpnlas-specified-by-a-business-partner-type-identifier-type-and-identifier-values"},"Returns a list of identifier mappings of an identifier to a BPNL/A/S, specified by a business partner type, identifier type and identifier values"),(0,n.kt)("p",null,"Find business partner numbers by identifiers. The response can contain less results than the number of identifier values that were requested, if some of the identifiers did not exist. For a single request, the maximum number of identifier values to search for is limited to ${bpdm.bpn.search-request-limit} entries."),(0,n.kt)(a.Z,{mdxType:"MimeTabs"},(0,n.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"businessPartnerType",required:!0,deprecated:void 0,schemaDescription:"Specifies if an identifier type is valid for legal entities (L) or addresses (A). Sites (S) are not supported.",schemaName:"string",qualifierMessage:"**Possible values:** [`LEGAL_ENTITY`, `ADDRESS`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"idType",required:!0,deprecated:void 0,schemaDescription:"Technical key of the type to which the identifiers belongs to",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"idValues",required:!0,deprecated:void 0,schemaDescription:"Values of the identifiers",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Found bpn to identifier value mappings")),(0,n.kt)("div",null,(0,n.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema"),(0,n.kt)("span",{style:{opacity:"0.6"}}," array")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"idValue",required:!1,deprecated:void 0,schemaDescription:"Value of the identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"bpn",required:!1,deprecated:void 0,schemaDescription:"Business Partner Number",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'[\n  {\n    "idValue": "string",\n    "bpn": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"On malformed request parameters or if number of requested bpns exceeds limit")),(0,n.kt)("div",null)),(0,n.kt)(l.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Specified identifier type not found")),(0,n.kt)("div",null)))))}y.isMDXComponent=!0}}]);