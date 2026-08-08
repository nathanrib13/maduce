(() => {
  'use strict';

  const WA_NUMBER = '5521992229972';

  const HTML_LANG = { pt: 'pt-BR', en: 'en', es: 'es', zh: 'zh-CN' };

  const T = {
    pt: {
      'meta.title': 'Maduce | Suprimentos Industriais para Solda, Corte e Proteção',
      'meta.description': 'A Maduce fabrica eletrodos, discos de corte, ferramentas, EPIs e consumíveis industriais com o rigor técnico que a indústria pesada exige.',
      'meta.ogTitle': 'Maduce | Suprimentos Industriais',
      'meta.ogDescription': 'Eletrodos, discos de corte, ferramentas, EPIs e consumíveis industriais. Qualidade, conformidade e desempenho do arco à entrega.',

      'a11y.skip': 'Pular para o conteúdo',
      'a11y.brand': 'Maduce, página inicial',
      'a11y.menuOpen': 'Abrir menu',
      'a11y.langSwitch': 'Selecionar idioma',

      'nav.home': 'Home',
      'nav.produtos': 'Produtos',
      'nav.qualidade': 'Qualidade',
      'nav.sobre': 'Sobre',
      'nav.contato': 'Contato',
      'nav.whatsapp': 'Fale no WhatsApp',

      'hero.eyebrow': 'Fabricante de Suprimentos Industriais',
      'hero.line1': 'PERFORMANCE',
      'hero.line2': 'QUE <em>SUSTENTA</em>',
      'hero.line3': 'A OPERAÇÃO.',
      'hero.sub': 'Eletrodos, discos de corte, ferramentas, EPIs e consumíveis industriais, com o rigor técnico que a solda, o corte e a obra pesada exigem, do pedido à entrega.',
      'hero.ctaPrimary': 'Conhecer linhas de produto',
      'hero.ctaSecondary': 'Falar com um especialista',
      'hero.scrollCue': 'Rolar',

      'marquee.allPositions': 'TODAS AS POSIÇÕES',

      'pillars.eyebrow': 'Nossos pilares',
      'pillars.title': 'O que sustenta<br>cada entrega.',
      'pillars.1.title': 'Qualidade Superior',
      'pillars.1.desc': 'Produtos selecionados e avaliados segundo critérios técnicos rigorosos, antes de chegar até você.',
      'pillars.2.title': 'Segurança',
      'pillars.2.desc': 'Soluções desenvolvidas para reduzir risco e aumentar a confiabilidade em cada operação industrial.',
      'pillars.3.title': 'Parceria',
      'pillars.3.desc': 'Relacionamentos comerciais construídos com transparência, prazo e compromisso de longo prazo.',
      'pillars.4.title': 'Desempenho',
      'pillars.4.desc': 'Produtos e processos pensados para elevar a produtividade e reduzir perdas na operação.',
      'pillars.5.title': 'Integridade',
      'pillars.5.desc': 'Atuação ética, transparente e em conformidade com normas técnicas e comerciais.',

      'products.eyebrow': 'Linhas de produto',
      'products.title': 'Tudo que a operação<br>pede, num fornecedor só.',
      'products.link': 'Consultar disponibilidade',
      'products.1.title': 'Soldagem',
      'products.1.desc': 'Eletrodos, arames, varetas, tochas e consumíveis para todas as posições e aplicações, de estruturas metálicas a manutenção pesada.',
      'products.1.alt': 'Caixa de eletrodos Maduce AWS 6013, 2,50mm, 5kg, uso geral',
      'products.2.title': 'Corte e Desbaste',
      'products.2.desc': 'Discos, rebolos, escovas, lixas e abrasivos para aço, inox e metal, com desempenho consistente em alta rotação.',
      'products.2.alt': 'Disco de corte abrasivo Maduce 4.1/2 polegadas para aço, inox e metal',
      'products.3.title': 'Ferramentas',
      'products.3.desc': 'Ferramentas elétricas e acessórios para uso industrial, selecionados para rotina intensa de operação.',
      'products.3.alt': 'Ferramentas Maduce: martelo, chave inglesa, alicates, brocas e chaves de fenda',
      'products.4.title': 'EPIs',
      'products.4.desc': 'Equipamentos de proteção individual para operações seguras, do canteiro ao chão de fábrica.',
      'products.4.alt': 'EPIs Maduce: capacete, óculos, protetor auricular e luvas',
      'products.5.title': 'Consumíveis Industriais',
      'products.5.desc': 'Produtos químicos, lubrificantes e acessórios que mantêm equipamentos e processos em pleno funcionamento.',
      'products.5.alt': 'Consumíveis industriais Maduce: graxa, fluido de corte, fita e acessórios',

      'qualidade.eyebrow': 'Engenharia por trás do produto',
      'qualidade.title': 'Ficha técnica.',
      'qualidade.spec1.tag': 'Eletrodo Revestido',
      'qualidade.spec1.desc': 'Eletrodo rutílico para aços de baixo carbono, em todas as posições. Boa abertura de arco e acabamento.',
      'qualidade.table.diam': 'Diâmetro (mm)',
      'qualidade.table.amp': 'Amperagem (A)',
      'qualidade.spec2.tag': 'Disco de Corte Abrasivo',
      'qualidade.spec2.desc': 'Corte para aço, inox e metal. Uso em esmerilhadeira angular, tipo 41.',
      'qualidade.spec2.dim': 'Dimensões',
      'qualidade.spec2.rpm': 'Rotação máxima',
      'qualidade.spec2.speed': 'Velocidade periférica',
      'qualidade.spec2.norm': 'Norma',
      'qualidade.materials': 'Aço · Inox · Metal',

      'sobre.eyebrow': 'Sobre a Maduce',
      'sobre.title': 'Fabricante de<br>suprimentos industriais.',
      'sobre.p1': 'A Maduce fabrica soluções para soldagem, corte, desbaste e manutenção industrial, com produtos desenvolvidos para atender às exigências técnicas dos mais diversos segmentos produtivos.',
      'sobre.p2': 'Sediada no Rio de Janeiro, nossa atuação é pautada pela qualidade, integridade e conformidade, com suporte comercial especializado para operações que demandam desempenho consistente e segurança.',
      'sobre.link': 'Falar com a equipe Maduce',

      'contato.eyebrow': 'Contato',
      'contato.title': 'Vamos falar sobre<br>a sua operação.',
      'contato.labelPhone': 'WhatsApp / Telefone',
      'contato.labelEmail': 'E-mail',
      'contato.labelAddress': 'Endereço',
      'contato.address': 'Av. das Américas, 3.120, Bloco B2, Sala 108<br>Rio de Janeiro, RJ, CEP 22.640‑102',
      'contato.cta': 'Iniciar conversa no WhatsApp',
      'contato.mapTitle': 'Localização Maduce, Av. das Américas, 3.120, Rio de Janeiro',

      'footer.tagline': 'Qualidade, integridade e desempenho para a indústria.',
      'footer.colProducts': 'Produtos',
      'footer.colInstitutional': 'Institucional',
      'footer.colContact': 'Atendimento',
      'footer.aboutLink': 'Sobre a Maduce',
      'footer.addressShort': 'Av. das Américas, 3.120, RJ',
      'footer.rights': 'Maduce. Todos os direitos reservados.',
      'footer.credit': 'Construído por Agência Celest',

      'wa.general': 'Olá, vim pelo site e gostaria de falar sobre produtos Maduce.',
      'wa.specialist': 'Olá, quero falar com um especialista Maduce.',
      'wa.soldagem': 'Quero falar sobre a linha de Soldagem.',
      'wa.corte': 'Quero falar sobre a linha de Corte e Desbaste.',
      'wa.ferramentas': 'Quero falar sobre a linha de Ferramentas.',
      'wa.epis': 'Quero falar sobre a linha de EPIs.',
      'wa.consumiveis': 'Quero falar sobre Consumíveis Industriais.'
    },

    en: {
      'meta.title': 'Maduce | Industrial Supplies for Welding, Cutting & Protection',
      'meta.description': 'Maduce manufactures electrodes, cutting discs, tools, PPE and industrial consumables with the technical rigor heavy industry demands.',
      'meta.ogTitle': 'Maduce | Industrial Supplies',
      'meta.ogDescription': 'Electrodes, cutting discs, tools, PPE and industrial consumables. Quality, compliance and performance from the arc to delivery.',

      'a11y.skip': 'Skip to content',
      'a11y.brand': 'Maduce, homepage',
      'a11y.menuOpen': 'Open menu',
      'a11y.langSwitch': 'Select language',

      'nav.home': 'Home',
      'nav.produtos': 'Products',
      'nav.qualidade': 'Quality',
      'nav.sobre': 'About',
      'nav.contato': 'Contact',
      'nav.whatsapp': 'Chat on WhatsApp',

      'hero.eyebrow': 'Manufacturer of Industrial Supplies',
      'hero.line1': 'PERFORMANCE',
      'hero.line2': 'THAT <em>POWERS</em>',
      'hero.line3': 'THE OPERATION.',
      'hero.sub': 'Electrodes, cutting discs, tools, PPE and industrial consumables, with the technical rigor that welding, cutting and heavy-duty work demand, from order to delivery.',
      'hero.ctaPrimary': 'Explore product lines',
      'hero.ctaSecondary': 'Talk to a specialist',
      'hero.scrollCue': 'Scroll',

      'marquee.allPositions': 'ALL POSITIONS',

      'pillars.eyebrow': 'Our pillars',
      'pillars.title': 'What backs<br>every delivery.',
      'pillars.1.title': 'Superior Quality',
      'pillars.1.desc': 'Products selected and evaluated against rigorous technical criteria before they reach you.',
      'pillars.2.title': 'Safety',
      'pillars.2.desc': 'Solutions built to reduce risk and increase reliability in every industrial operation.',
      'pillars.3.title': 'Partnership',
      'pillars.3.desc': 'Business relationships built on transparency, reliability and long-term commitment.',
      'pillars.4.title': 'Performance',
      'pillars.4.desc': 'Products and processes designed to boost productivity and reduce operational losses.',
      'pillars.5.title': 'Integrity',
      'pillars.5.desc': 'Ethical, transparent operations, fully compliant with technical and commercial standards.',

      'products.eyebrow': 'Product lines',
      'products.title': 'Everything your operation<br>needs, from one supplier.',
      'products.link': 'Check availability',
      'products.1.title': 'Welding',
      'products.1.desc': 'Electrodes, wires, rods, torches and consumables for every position and application, from steel structures to heavy maintenance.',
      'products.1.alt': 'Box of Maduce AWS 6013 electrodes, 2.50mm, 5kg, general purpose',
      'products.2.title': 'Cutting & Grinding',
      'products.2.desc': 'Discs, wheels, brushes, sanding and abrasives for steel, stainless and metal, with consistent performance at high speed.',
      'products.2.alt': 'Maduce 4.5-inch abrasive cutting disc for steel, stainless and metal',
      'products.3.title': 'Tools',
      'products.3.desc': 'Power tools and accessories for industrial use, selected for intensive daily operation.',
      'products.3.alt': 'Maduce tools: hammer, adjustable wrench, pliers, drill bits and screwdrivers',
      'products.4.title': 'PPE',
      'products.4.desc': 'Personal protective equipment for safe operations, from the job site to the factory floor.',
      'products.4.alt': 'Maduce PPE: helmet, glasses, ear protection and gloves',
      'products.5.title': 'Industrial Consumables',
      'products.5.desc': 'Chemicals, lubricants and accessories that keep equipment and processes running at full capacity.',
      'products.5.alt': 'Maduce industrial consumables: grease, cutting fluid, tape and accessories',

      'qualidade.eyebrow': 'The engineering behind the product',
      'qualidade.title': 'Technical data.',
      'qualidade.spec1.tag': 'Coated Electrode',
      'qualidade.spec1.desc': 'Rutile electrode for low-carbon steel, all positions. Smooth arc strike and clean finish.',
      'qualidade.table.diam': 'Diameter (mm)',
      'qualidade.table.amp': 'Amperage (A)',
      'qualidade.spec2.tag': 'Abrasive Cutting Disc',
      'qualidade.spec2.desc': 'Cuts steel, stainless and metal. For use on angle grinders, type 41.',
      'qualidade.spec2.dim': 'Dimensions',
      'qualidade.spec2.rpm': 'Max. speed',
      'qualidade.spec2.speed': 'Peripheral speed',
      'qualidade.spec2.norm': 'Standard',
      'qualidade.materials': 'Steel · Stainless · Metal',

      'sobre.eyebrow': 'About Maduce',
      'sobre.title': 'Manufacturer of<br>industrial supplies.',
      'sobre.p1': 'Maduce manufactures solutions for welding, cutting, grinding and industrial maintenance, with products developed to meet the technical demands of the most diverse production segments.',
      'sobre.p2': 'Headquartered in Rio de Janeiro, we operate on the principles of quality, integrity and compliance, with specialized commercial support for operations that demand consistent performance and safety.',
      'sobre.link': 'Talk to the Maduce team',

      'contato.eyebrow': 'Contact',
      'contato.title': "Let's talk about<br>your operation.",
      'contato.labelPhone': 'WhatsApp / Phone',
      'contato.labelEmail': 'Email',
      'contato.labelAddress': 'Address',
      'contato.address': 'Av. das Américas, 3120, Block B2, Suite 108<br>Rio de Janeiro, RJ, Brazil, 22640‑102',
      'contato.cta': 'Start a WhatsApp chat',
      'contato.mapTitle': 'Maduce location, Av. das Américas, 3120, Rio de Janeiro',

      'footer.tagline': 'Quality, integrity and performance for industry.',
      'footer.colProducts': 'Products',
      'footer.colInstitutional': 'Company',
      'footer.colContact': 'Contact',
      'footer.aboutLink': 'About Maduce',
      'footer.addressShort': 'Av. das Américas, 3120, Rio de Janeiro',
      'footer.rights': 'Maduce. All rights reserved.',
      'footer.credit': 'Built by Agência Celest',

      'wa.general': "Hello, I found you through the website and would like to know more about Maduce products.",
      'wa.specialist': "Hello, I'd like to speak with a Maduce specialist.",
      'wa.soldagem': "I'd like to know more about the Welding line.",
      'wa.corte': "I'd like to know more about the Cutting & Grinding line.",
      'wa.ferramentas': "I'd like to know more about the Tools line.",
      'wa.epis': "I'd like to know more about the PPE line.",
      'wa.consumiveis': "I'd like to know more about Industrial Consumables."
    },

    es: {
      'meta.title': 'Maduce | Suministros Industriales para Soldadura, Corte y Protección',
      'meta.description': 'Maduce fabrica electrodos, discos de corte, herramientas, EPP y consumibles industriales con el rigor técnico que exige la industria pesada.',
      'meta.ogTitle': 'Maduce | Suministros Industriales',
      'meta.ogDescription': 'Electrodos, discos de corte, herramientas, EPP y consumibles industriales. Calidad, conformidad y desempeño del arco a la entrega.',

      'a11y.skip': 'Saltar al contenido',
      'a11y.brand': 'Maduce, página de inicio',
      'a11y.menuOpen': 'Abrir menú',
      'a11y.langSwitch': 'Seleccionar idioma',

      'nav.home': 'Inicio',
      'nav.produtos': 'Productos',
      'nav.qualidade': 'Calidad',
      'nav.sobre': 'Nosotros',
      'nav.contato': 'Contacto',
      'nav.whatsapp': 'Escríbenos por WhatsApp',

      'hero.eyebrow': 'Fabricante de Suministros Industriales',
      'hero.line1': 'RENDIMIENTO',
      'hero.line2': 'QUE <em>SOSTIENE</em>',
      'hero.line3': 'TU OPERACIÓN.',
      'hero.sub': 'Electrodos, discos de corte, herramientas, EPP y consumibles industriales, con el rigor técnico que la soldadura, el corte y la obra pesada exigen, del pedido a la entrega.',
      'hero.ctaPrimary': 'Conocer líneas de producto',
      'hero.ctaSecondary': 'Hablar con un especialista',
      'hero.scrollCue': 'Desplazar',

      'marquee.allPositions': 'TODAS LAS POSICIONES',

      'pillars.eyebrow': 'Nuestros pilares',
      'pillars.title': 'Lo que respalda<br>cada entrega.',
      'pillars.1.title': 'Calidad Superior',
      'pillars.1.desc': 'Productos seleccionados y evaluados según criterios técnicos rigurosos, antes de llegar a ti.',
      'pillars.2.title': 'Seguridad',
      'pillars.2.desc': 'Soluciones desarrolladas para reducir riesgos y aumentar la confiabilidad en cada operación industrial.',
      'pillars.3.title': 'Alianza',
      'pillars.3.desc': 'Relaciones comerciales construidas con transparencia, cumplimiento de plazos y compromiso a largo plazo.',
      'pillars.4.title': 'Desempeño',
      'pillars.4.desc': 'Productos y procesos pensados para elevar la productividad y reducir pérdidas en la operación.',
      'pillars.5.title': 'Integridad',
      'pillars.5.desc': 'Actuación ética, transparente y en conformidad con normas técnicas y comerciales.',

      'products.eyebrow': 'Líneas de producto',
      'products.title': 'Todo lo que la operación<br>necesita, en un solo proveedor.',
      'products.link': 'Consultar disponibilidad',
      'products.1.title': 'Soldadura',
      'products.1.desc': 'Electrodos, alambres, varillas, antorchas y consumibles para todas las posiciones y aplicaciones, de estructuras metálicas a mantenimiento pesado.',
      'products.1.alt': 'Caja de electrodos Maduce AWS 6013, 2,50mm, 5kg, uso general',
      'products.2.title': 'Corte y Desbaste',
      'products.2.desc': 'Discos, muelas, cepillos, lijas y abrasivos para acero, inoxidable y metal, con desempeño consistente en alta rotación.',
      'products.2.alt': 'Disco de corte abrasivo Maduce de 4.1/2 pulgadas para acero, inoxidable y metal',
      'products.3.title': 'Herramientas',
      'products.3.desc': 'Herramientas eléctricas y accesorios para uso industrial, seleccionados para una rutina de operación intensa.',
      'products.3.alt': 'Herramientas Maduce: martillo, llave ajustable, alicates, brocas y destornilladores',
      'products.4.title': 'EPP',
      'products.4.desc': 'Equipos de protección personal para operaciones seguras, de la obra al piso de fábrica.',
      'products.4.alt': 'EPP Maduce: casco, gafas, protector auditivo y guantes',
      'products.5.title': 'Consumibles Industriales',
      'products.5.desc': 'Productos químicos, lubricantes y accesorios que mantienen equipos y procesos en pleno funcionamiento.',
      'products.5.alt': 'Consumibles industriales Maduce: grasa, fluido de corte, cinta y accesorios',

      'qualidade.eyebrow': 'La ingeniería detrás del producto',
      'qualidade.title': 'Ficha técnica.',
      'qualidade.spec1.tag': 'Electrodo Revestido',
      'qualidade.spec1.desc': 'Electrodo rutílico para aceros de bajo carbono, en todas las posiciones. Buena apertura de arco y acabado.',
      'qualidade.table.diam': 'Diámetro (mm)',
      'qualidade.table.amp': 'Amperaje (A)',
      'qualidade.spec2.tag': 'Disco de Corte Abrasivo',
      'qualidade.spec2.desc': 'Corte para acero, inoxidable y metal. Uso en amoladora angular, tipo 41.',
      'qualidade.spec2.dim': 'Dimensiones',
      'qualidade.spec2.rpm': 'Rotación máxima',
      'qualidade.spec2.speed': 'Velocidad periférica',
      'qualidade.spec2.norm': 'Norma',
      'qualidade.materials': 'Acero · Inox · Metal',

      'sobre.eyebrow': 'Sobre Maduce',
      'sobre.title': 'Fabricante de<br>suministros industriales.',
      'sobre.p1': 'Maduce fabrica soluciones para soldadura, corte, desbaste y mantenimiento industrial, con productos desarrollados para atender las exigencias técnicas de los más diversos segmentos productivos.',
      'sobre.p2': 'Con sede en Río de Janeiro, nuestra actuación se rige por la calidad, la integridad y el cumplimiento normativo, con soporte comercial especializado para operaciones que exigen desempeño constante y seguridad.',
      'sobre.link': 'Hablar con el equipo Maduce',

      'contato.eyebrow': 'Contacto',
      'contato.title': 'Hablemos sobre<br>tu operación.',
      'contato.labelPhone': 'WhatsApp / Teléfono',
      'contato.labelEmail': 'Correo electrónico',
      'contato.labelAddress': 'Dirección',
      'contato.address': 'Av. das Américas, 3120, Bloque B2, Oficina 108<br>Río de Janeiro, RJ, Brasil, 22640‑102',
      'contato.cta': 'Iniciar conversación por WhatsApp',
      'contato.mapTitle': 'Ubicación de Maduce, Av. das Américas, 3120, Río de Janeiro',

      'footer.tagline': 'Calidad, integridad y desempeño para la industria.',
      'footer.colProducts': 'Productos',
      'footer.colInstitutional': 'Institucional',
      'footer.colContact': 'Atención',
      'footer.aboutLink': 'Sobre Maduce',
      'footer.addressShort': 'Av. das Américas, 3120, Río de Janeiro',
      'footer.rights': 'Maduce. Todos los derechos reservados.',
      'footer.credit': 'Creado por Agência Celest',

      'wa.general': 'Hola, los encontré a través del sitio web y me gustaría saber más sobre los productos Maduce.',
      'wa.specialist': 'Hola, me gustaría hablar con un especialista de Maduce.',
      'wa.soldagem': 'Me gustaría saber más sobre la línea de Soldadura.',
      'wa.corte': 'Me gustaría saber más sobre la línea de Corte y Desbaste.',
      'wa.ferramentas': 'Me gustaría saber más sobre la línea de Herramientas.',
      'wa.epis': 'Me gustaría saber más sobre la línea de EPP.',
      'wa.consumiveis': 'Me gustaría saber más sobre Consumibles Industriales.'
    },

    zh: {
      'meta.title': 'Maduce | 焊接、切割与防护工业用品',
      'meta.description': 'Maduce 生产电焊条、切割片、工具、个人防护装备及工业耗材,满足重工业所需的严格技术标准。',
      'meta.ogTitle': 'Maduce | 工业用品',
      'meta.ogDescription': '电焊条、切割片、工具、个人防护装备及工业耗材。从电弧到交付,品质、合规与性能兼备。',

      'a11y.skip': '跳到主要内容',
      'a11y.brand': 'Maduce,首页',
      'a11y.menuOpen': '打开菜单',
      'a11y.langSwitch': '选择语言',

      'nav.home': '首页',
      'nav.produtos': '产品',
      'nav.qualidade': '品质',
      'nav.sobre': '关于我们',
      'nav.contato': '联系我们',
      'nav.whatsapp': 'WhatsApp联系我们',

      'hero.eyebrow': '工业用品制造商',
      'hero.line1': '卓越性能',
      'hero.line2': '<em>支撑</em>您的',
      'hero.line3': '工业运营。',
      'hero.sub': '电焊条、切割片、工具、个人防护装备及工业耗材,以焊接、切割及重工业作业所需的技术标准,从下单到交付全程保障。',
      'hero.ctaPrimary': '查看产品系列',
      'hero.ctaSecondary': '联系专家咨询',
      'hero.scrollCue': '下滑',

      'marquee.allPositions': '全位置适用',

      'pillars.eyebrow': '核心理念',
      'pillars.title': '支撑每一次<br>交付的基石。',
      'pillars.1.title': '卓越品质',
      'pillars.1.desc': '产品在到达您手中之前,均经过严格技术标准的筛选与评估。',
      'pillars.2.title': '安全保障',
      'pillars.2.desc': '所有解决方案均致力于降低风险,提升每一次工业作业的可靠性。',
      'pillars.3.title': '合作共赢',
      'pillars.3.desc': '以透明、守时和长期承诺为基础,建立稳固的商业关系。',
      'pillars.4.title': '高效性能',
      'pillars.4.desc': '产品与流程均以提升生产效率、减少运营损耗为目标进行设计。',
      'pillars.5.title': '诚信经营',
      'pillars.5.desc': '秉持道德诚信、透明经营的原则,严格遵守技术与商业规范。',

      'products.eyebrow': '产品系列',
      'products.title': '一站式满足<br>运营所需的一切。',
      'products.link': '查询库存',
      'products.1.title': '焊接',
      'products.1.desc': '适用于各种焊接位置与应用场景的电焊条、焊丝、焊条、焊枪及耗材,从钢结构到重型设备维护均可满足。',
      'products.1.alt': 'Maduce AWS 6013电焊条,2.50mm,5kg装,通用型',
      'products.2.title': '切割与打磨',
      'products.2.desc': '适用于钢材、不锈钢及金属的切割片、砂轮、钢丝刷、砂纸及研磨材料,在高速运转下性能稳定。',
      'products.2.alt': 'Maduce 4.5英寸切割片,适用于钢材、不锈钢及金属',
      'products.3.title': '工具',
      'products.3.desc': '适用于工业用途的电动工具及配件,专为高强度日常作业挑选。',
      'products.3.alt': 'Maduce工具:锤子、活动扳手、钳子、钻头及螺丝刀',
      'products.4.title': '个人防护装备',
      'products.4.desc': '从施工现场到工厂车间,全方位保障作业安全的个人防护装备。',
      'products.4.alt': 'Maduce个人防护装备:安全帽、护目镜、耳塞及手套',
      'products.5.title': '工业耗材',
      'products.5.desc': '化学品、润滑剂及配件,确保设备与工艺流程持续稳定运行。',
      'products.5.alt': 'Maduce工业耗材:润滑脂、切削液、胶带及配件',

      'qualidade.eyebrow': '产品背后的工程技术',
      'qualidade.title': '技术规格。',
      'qualidade.spec1.tag': '药皮焊条',
      'qualidade.spec1.desc': '钛型焊条,适用于低碳钢,全位置焊接,起弧顺畅、焊缝美观。',
      'qualidade.table.diam': '直径 (mm)',
      'qualidade.table.amp': '电流 (A)',
      'qualidade.spec2.tag': '研磨切割片',
      'qualidade.spec2.desc': '适用于钢材、不锈钢及金属切割,配合角磨机使用,41型。',
      'qualidade.spec2.dim': '尺寸',
      'qualidade.spec2.rpm': '最高转速',
      'qualidade.spec2.speed': '线速度',
      'qualidade.spec2.norm': '标准',
      'qualidade.materials': '钢材·不锈钢·金属',

      'sobre.eyebrow': '关于 Maduce',
      'sobre.title': '工业用品<br>制造商。',
      'sobre.p1': 'Maduce专注于焊接、切割、打磨及工业维护解决方案的生产,产品研发充分满足各类生产领域的技术需求。',
      'sobre.p2': '总部位于里约热内卢,我们始终秉持品质、诚信与合规的原则,为需要稳定性能与安全保障的运营提供专业的商务支持。',
      'sobre.link': '联系Maduce团队',

      'contato.eyebrow': '联系我们',
      'contato.title': '让我们聊聊<br>您的运营需求。',
      'contato.labelPhone': 'WhatsApp / 电话',
      'contato.labelEmail': '电子邮箱',
      'contato.labelAddress': '地址',
      'contato.address': 'Av. das Américas 3120号,B2栋108室<br>里约热内卢,RJ,巴西,邮编22640-102',
      'contato.cta': '通过WhatsApp联系我们',
      'contato.mapTitle': 'Maduce位置,Av. das Américas 3120号,里约热内卢',

      'footer.tagline': '为工业行业提供品质、诚信与卓越性能。',
      'footer.colProducts': '产品',
      'footer.colInstitutional': '公司信息',
      'footer.colContact': '客户服务',
      'footer.aboutLink': '关于 Maduce',
      'footer.addressShort': 'Av. das Américas 3120号,里约热内卢',
      'footer.rights': 'Maduce。保留所有权利。',
      'footer.credit': '由 Agência Celest 打造',

      'wa.general': '您好,我通过网站联系,想了解更多关于Maduce产品的信息。',
      'wa.specialist': '您好,我想和Maduce的专家交流。',
      'wa.soldagem': '我想了解焊接系列产品。',
      'wa.corte': '我想了解切割与打磨系列产品。',
      'wa.ferramentas': '我想了解工具系列产品。',
      'wa.epis': '我想了解个人防护装备系列产品。',
      'wa.consumiveis': '我想了解工业耗材产品。'
    }
  };

  const STORAGE_KEY = 'maduce_lang';
  const DEFAULT_LANG = 'pt';

  function getStoredLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && T[stored]) return stored;
    } catch (e) { /* localStorage unavailable */ }
    return DEFAULT_LANG;
  }

  function applyLanguage(lang) {
    const dict = T[lang] || T[DEFAULT_LANG];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] != null) el.setAttribute('aria-label', dict[key]);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      if (dict[key] != null) el.setAttribute('alt', dict[key]);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] != null) el.setAttribute('title', dict[key]);
    });

    document.querySelectorAll('[data-i18n-wa]').forEach(el => {
      const key = el.getAttribute('data-i18n-wa');
      if (dict[key] != null) {
        const text = encodeURIComponent(dict[key]);
        el.setAttribute('href', `https://wa.me/${WA_NUMBER}?text=${text}`);
      }
    });

    if (dict['meta.title']) document.title = dict['meta.title'];
    const metaDesc = document.getElementById('metaDescription');
    if (metaDesc && dict['meta.description']) metaDesc.setAttribute('content', dict['meta.description']);
    const ogTitle = document.getElementById('metaOgTitle');
    if (ogTitle && dict['meta.ogTitle']) ogTitle.setAttribute('content', dict['meta.ogTitle']);
    const ogDesc = document.getElementById('metaOgDescription');
    if (ogDesc && dict['meta.ogDescription']) ogDesc.setAttribute('content', dict['meta.ogDescription']);

    document.documentElement.setAttribute('lang', HTML_LANG[lang] || 'pt-BR');

    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });

  applyLanguage(getStoredLang());

  window.MaduceI18n = { apply: applyLanguage };
})();
