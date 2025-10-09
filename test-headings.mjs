import { notionToHtml } from './scripts/Notion/notion-to-blog.mjs';

const testContent = `### **Mercado regulado, o PVPC**

En este modelo, el precio de la electricidad está completamente regulado y **varía cada hora** según la oferta y la demanda del mercado mayorista.

**Lo mejor** 

- Este mercado es completamente transparente. Es decir, puedes consultar en cada momento el precio de la electricidad que publica Red Eléctrica de España (consúltalo [aquí](https://www.esios.ree.es/es/pvpc) si tienes curiosidad).
- Además, solo en este mercado tienes la posibilidad de beneficiarte del descuento regulado por el Gobierno y llamado Bono Social.

**Lo que debes tener en cuenta**

- Dado que el precio se pacta cada hora, este puede llegar a fluctuar muchísimo.
- Esta volatilidad hace que sea **imposible de prever** para el consumidor cuál va a ser la cantidad total que pagará cada mes.

### **Mercado libre**

En el mercado libre, las compañías eléctricas pueden ofrecer sus propias tarifas y condiciones.

**Lo mejor**

- Permite **mayor estabilidad**: sabes cuánto pagarás por cada kWh durante todo el contrato.
- Puedes acceder a **ofertas y descuentos** puntuales o a servicios adicionales.

**Lo que debes tener en cuenta**

- Algunas tarifas pueden incluir **cláusulas o servicios adicionales** que encarecen el precio final.
- Es posible que el precio fijo pactado sea **algo superior** al del mercado regulado.`;

console.log('Input:');
console.log(testContent);
console.log('\n' + '='.repeat(50) + '\n');

const htmlResult = notionToHtml(testContent);
console.log('HTML result:');
console.log(htmlResult);
