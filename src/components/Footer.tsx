import { Facebook, Instagram, Twitter, Youtube, ArrowLeft } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Footer = () => {
  const [selectedPolicy, setSelectedPolicy] = useState<string | null>(null);

  const policies = {
    "about": {
      title: "Sobre nós",
      content: `A Zylumia é uma empresa americana líder em cuidados com a pele, fundada em 2018 com a missão de revolucionar a indústria da beleza através de produtos premium com ingredientes cientificamente comprovados. Nossa sede está localizada em Beverly Hills, Califórnia, e distribuímos produtos para mais de 50 países ao redor do mundo.

NOSSA HISTÓRIA:
A Zylumia nasceu da visão de nossa fundadora, Dra. Sarah Mitchell, uma renomada dermatologista com mais de 15 anos de experiência clínica. Após anos observando a frustração de seus pacientes com produtos que prometiam muito e entregavam pouco, ela decidiu criar uma linha de cuidados que realmente funcionasse.

MISSÃO E VALORES:
Nossa missão é democratizar o acesso a cuidados de pele de qualidade médica, tornando-os acessíveis e eficazes para pessoas de todas as idades e tipos de pele. Acreditamos que cada pessoa merece se sentir confiante em sua própria pele.

Nossos valores fundamentais incluem:
- Transparência total em todos os ingredientes utilizados
- Pesquisa científica rigorosa antes do lançamento de qualquer produto
- Sustentabilidade ambiental em todos os processos
- Compromisso com a satisfação do cliente
- Inovação constante baseada em evidências científicas

QUALIDADE E CERTIFICAÇÕES:
Todos os nossos produtos são fabricados em instalações certificadas pela FDA (Food and Drug Administration) e seguem as mais rigorosas normas de qualidade GMP (Good Manufacturing Practices). Realizamos testes dermatológicos extensivos, incluindo:
- Testes de segurança e eficácia em laboratórios independentes
- Estudos clínicos com voluntários de diferentes tipos de pele
- Análises microbiológicas para garantir a pureza
- Testes de estabilidade para garantir a durabilidade dos produtos

PESQUISA E DESENVOLVIMENTO:
Nossa equipe de P&D é composta por 12 especialistas, incluindo dermatologistas, químicos cosméticos e bioengenheiros. Investimos anualmente mais de $2 milhões em pesquisa para desenvolver fórmulas inovadoras que combinam ingredientes naturais com tecnologia avançada.

Trabalhamos em parceria com universidades renomadas como Stanford University e UCLA para desenvolver novos compostos ativos. Nosso laboratório de pesquisa possui equipamentos de última geração para análise molecular e desenvolvimento de formulações.

RESPONSABILIDADE SOCIAL:
A Zylumia está comprometida com práticas éticas e sustentáveis. Não testamos em animais e somos certificados pela PETA como empresa cruelty-free. Além disso, 5% de nossos lucros anuais são destinados a programas de saúde da pele em comunidades carentes.

PARCERIAS E RECONHECIMENTOS:
Nossos produtos são recomendados por mais de 500 dermatologistas nos Estados Unidos e ganharam diversos prêmios da indústria, incluindo o "Best Innovation Award" da American Skincare Association em 2023.

EQUIPE:
Nossa equipe é formada por mais de 100 profissionais dedicados, desde pesquisadores até especialistas em atendimento ao cliente. Todos compartilham a paixão por ajudar as pessoas a alcançarem a melhor versão de sua pele.

COMPROMISSO COM O FUTURO:
Continuamos investindo em tecnologias emergentes como nanotecnologia e biotecnologia para desenvolver os próximos avanços em cuidados com a pele. Nosso objetivo é permanecer na vanguarda da inovação enquanto mantemos nosso compromisso com a segurança e eficácia.`
    },
    "refunds": {
      title: "Reembolsos e Pagamentos",
      content: `POLÍTICA DE REEMBOLSO ZYLUMIA:

GARANTIA DE SATISFAÇÃO:
Oferecemos uma garantia incondicional de 60 dias para todos os nossos produtos. Se por qualquer motivo você não estiver completamente satisfeito com sua compra, garantimos o reembolso integral do valor pago, incluindo taxas de envio originais.

PROCESSO DE DEVOLUÇÃO:
1. Entre em contato conosco através do email returns@zylumia.com ou telefone (1-800-ZYLUMIA
2. Forneça seu número de pedido e motivo da devolução
3. Receba sua etiqueta de devolução gratuita por email
4. Embale o produto em sua embalagem original
5. Cole a etiqueta e envie pelos Correios
6. Processamos o reembolso em até 5 dias úteis após recebimento

CONDIÇÕES PARA REEMBOLSO:
- Produtos devem estar com pelo menos 70% do conteúdo original
- Embalagem original deve estar incluída
- Produtos personalizados ou em promoção especial seguem política diferenciada
- Não cobramos taxa de reposição de estoque
- Reembolsos são processados no método de pagamento original

MÉTODOS DE PAGAMENTO ACEITOS:

CARTÕES DE CRÉDITO:
- Visa, Mastercard, American Express, Discover
- Parcelamento em até 12x sem juros para compras acima de $100
- Proteção contra fraude em todas as transações
- Processamento instantâneo

CARTEIRAS DIGITAIS:
- PayPal (com proteção do comprador)
- Apple Pay com Touch ID e Face ID
- Google Pay com autenticação biométrica
- Samsung Pay para dispositivos compatíveis

OUTROS MÉTODOS:
- Transferência bancária (ACH) - 2-3 dias úteis
- Klarna - Compre agora, pague depois
- Afterpay - Parcelamento em 4x sem juros
- Criptomoedas (Bitcoin, Ethereum) através de parceria com BitPay

SEGURANÇA DE PAGAMENTOS:

CRIPTOGRAFIA E PROTEÇÃO:
- Certificação SSL 256-bit em todas as páginas
- Conformidade PCI DSS Level 1 (maior nível de segurança)
- Tokenização de dados de cartão de crédito
- Monitoramento 24/7 contra atividades suspeitas
- Verificação de endereço (AVS) e código de segurança (CVV)

PROTEÇÃO CONTRA FRAUDE:
- Sistema de detecção de fraude com IA
- Verificação em tempo real de transações
- Alertas automáticos para atividades suspeitas
- Equipe especializada em prevenção de fraudes

POLÍTICA DE PRIVACIDADE FINANCEIRA:
- Nunca compartilhamos dados financeiros com terceiros
- Dados armazenados em servidores seguros com backup triplo
- Exclusão automática de dados após período legal obrigatório
- Conformidade com regulamentações GDPR e CCPA

SUPORTE FINANCEIRO:
Nossa equipe de suporte financeiro está disponível:
- Segunda a Sexta: 6h às 20h (PST)
- Sábado: 8h às 16h (PST)
- Chat online 24/7 para questões urgentes
- Email: billing@zylumia.com
- Telefone: 1-800-ZYLUMIA (995-8642)

PROGRAMAS ESPECIAIS:
- Desconto de 15% para estudantes universitários
- 20% de desconto para profissionais da saúde
- Programa de fidelidade com cashback de até 10%
- Descontos especiais para compras em quantidade

MOEDAS ACEITAS:
- USD (Dólar Americano) - moeda principal
- CAD (Dólar Canadense)
- EUR (Euro)
- GBP (Libra Esterlina)
- BRL (Real Brasileiro)
- Conversão automática na taxa de câmbio atual`
    },
    "privacy": {
      title: "Política de Privacidade",
      content: `POLÍTICA DE PRIVACIDADE ZYLUMIA

DATA DE VIGÊNCIA: 01 de Janeiro de 2024
ÚLTIMA ATUALIZAÇÃO: 15 de Dezembro de 2024

A Zylumia, Inc. ("nós", "nosso" ou "Zylumia") valoriza sua privacidade e está comprometida em proteger suas informações pessoais. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso site, utiliza nossos serviços ou compra nossos produtos.

1. INFORMAÇÕES QUE COLETAMOS:

INFORMAÇÕES FORNECIDAS POR VOCÊ:
- Nome completo, endereço de email e telefone
- Endereços de cobrança e entrega
- Informações de pagamento (processadas de forma segura)
- Data de nascimento para verificação de idade
- Preferências de produtos e tipo de pele
- Histórico de compras e avaliações de produtos
- Comunicações conosco (emails, chat, telefone)

INFORMAÇÕES COLETADAS AUTOMATICAMENTE:
- Endereço IP e localização geográfica aproximada
- Tipo de dispositivo, navegador e sistema operacional
- Páginas visitadas, tempo de permanência e padrões de navegação
- Origem da visita (motor de busca, redes sociais, etc.)
- Cookies e tecnologias similares
- Dados de desempenho do site e análises de uso

INFORMAÇÕES DE TERCEIROS:
- Dados de redes sociais (quando você conecta suas contas)
- Informações de verificação de idade e identidade
- Dados de prevenção à fraude
- Análises de crédito para opções de financiamento

2. COMO USAMOS SUAS INFORMAÇÕES:

PROCESSAMENTO DE PEDIDOS:
- Confirmar e processar suas compras
- Gerenciar pagamentos e faturamento
- Preparar e enviar seus produtos
- Fornecer atualizações sobre o status do pedido
- Processar devoluções e reembolsos

COMUNICAÇÃO E SUPORTE:
- Responder suas perguntas e solicitações
- Fornecer suporte técnico e atendimento ao cliente
- Enviar confirmações de pedidos e atualizações importantes
- Notificar sobre mudanças em nossos termos ou políticas

MARKETING E PERSONALIZAÇÃO:
- Enviar newsletters e ofertas promocionais (com seu consentimento)
- Personalizar recomendações de produtos
- Conduzir pesquisas de satisfação
- Criar perfis de preferências para melhor experiência
- Segmentar campanhas de marketing relevantes

MELHORIA DE SERVIÇOS:
- Analisar padrões de uso para otimizar nosso site
- Desenvolver novos produtos baseados em feedback
- Detectar e prevenir fraudes
- Realizar análises estatísticas e de mercado
- Testar novos recursos e funcionalidades

3. COMPARTILHAMENTO DE INFORMAÇÕES:

NÃO VENDEMOS SEUS DADOS PESSOAIS.

Compartilhamos informações limitadas apenas com:

PRESTADORES DE SERVIÇOS:
- Processadores de pagamento (Stripe, PayPal)
- Empresas de envio (FedEx, UPS, USPS)
- Plataformas de email marketing (com opt-in)
- Serviços de análise web (Google Analytics, anonymizado)
- Suporte técnico e hospedagem em nuvem

REQUISITOS LEGAIS:
- Autoridades governamentais quando exigido por lei
- Processos judiciais e investigações criminais
- Proteção de direitos, propriedade ou segurança
- Fusões ou aquisições empresariais (com notificação prévia)

4. PROTEÇÃO DE DADOS:

MEDIDAS DE SEGURANÇA TÉCNICAS:
- Criptografia SSL/TLS 256-bit para todas as transmissões
- Armazenamento seguro em servidores certificados ISO 27001
- Autenticação multifator para acesso administrativo
- Firewall avançado e sistemas de detecção de intrusão
- Backup regular e plano de recuperação de desastres
- Tokenização de dados de cartão de crédito

MEDIDAS ORGANIZACIONAIS:
- Treinamento regular de funcionários sobre privacidade
- Acesso limitado baseado no princípio da necessidade
- Acordos de confidencialidade com todos os prestadores
- Auditorias de segurança trimestrais
- Políticas internas rigorosas de proteção de dados

5. SEUS DIREITOS DE PRIVACIDADE:

ACESSO E CONTROLE:
- Visualizar todas as informações que temos sobre você
- Corrigir dados incorretos ou desatualizados
- Baixar uma cópia de seus dados (portabilidade)
- Excluir sua conta e dados associados
- Restringir o processamento de certas informações

PREFERÊNCIAS DE COMUNICAÇÃO:
- Cancelar inscrição de emails marketing a qualquer momento
- Escolher tipos específicos de comunicação
- Definir frequência de contato
- Optar por comunicação apenas essencial

Para exercer seus direitos, envie email para privacy@zylumia.com

6. COOKIES E TECNOLOGIAS DE RASTREAMENTO:

TIPOS DE COOKIES:
- Essenciais: Necessários para funcionamento básico
- Funcionais: Melhoram a experiência do usuário
- Analíticos: Ajudam a entender como o site é usado
- Marketing: Personalizam anúncios e ofertas

GERENCIAMENTO:
Você pode controlar cookies através das configurações do navegador ou nossa ferramenta de preferências de cookies disponível no site.

7. RETENÇÃO DE DADOS:

- Dados de conta: Mantidos enquanto a conta estiver ativa
- Histórico de compras: 7 anos para fins contábeis e fiscais
- Dados de marketing: Até solicitar descadastro
- Logs de segurança: 2 anos para proteção contra fraudes
- Dados analíticos: Agregados e anonimizados permanentemente

8. TRANSFERÊNCIAS INTERNACIONAIS:

Alguns dados podem ser processados fora dos EUA por nossos prestadores de serviços. Garantimos proteção adequada através de:
- Cláusulas contratuais padrão aprovadas
- Certificações de adequação de privacidade
- Salvaguardas técnicas e organizacionais

9. MENORES DE IDADE:

Não coletamos intencionalmente dados de menores de 13 anos. Se descobrirmos que coletamos tais informações, excluiremos imediatamente.

10. ATUALIZAÇÕES DESTA POLÍTICA:

Notificaremos sobre mudanças significativas via email ou aviso no site. Use continuado após mudanças constitui aceitação da nova política.

11. CONTATO:

Para questões sobre privacidade:
Email: privacy@zylumia.com
Telefone: 1-800-PRIVACY (774-8229)
Endereço: Zylumia Privacy Office, 123 Beverly Hills Blvd, Beverly Hills, CA 90210

Para solicitações CCPA (California Consumer Privacy Act):
Email: ccpa@zylumia.com

Para solicitações GDPR (General Data Protection Regulation):
Email: gdpr@zylumia.com`
    },
    "shipping": {
      title: "Política de envio e entrega",
      content: `POLÍTICA DE ENVIO E ENTREGA ZYLUMIA

VISÃO GERAL:
A Zylumia está comprometida em entregar seus produtos de cuidados com a pele da forma mais rápida e segura possível. Trabalhamos com os principais transportadores para garantir que seus produtos cheguem em perfeitas condições.

OPÇÕES DE ENVIO DISPONÍVEIS:

ENVIO PADRÃO (GRATUITO):
- Prazo: 5-7 dias úteis
- Disponível para pedidos acima de $35
- Rastreamento completo incluído
- Seguro automático até $100
- Entrega de segunda a sexta-feira

ENVIO EXPRESSO:
- Prazo: 2-3 dias úteis
- Custo: $12.99
- Processamento prioritário
- Seguro até $500 incluído
- Entrega de segunda a sábado

ENVIO OVERNIGHT:
- Prazo: 1 dia útil
- Custo: $24.99
- Processamento no mesmo dia (até 14h PST)
- Seguro completo incluído
- Entrega de segunda a sexta-feira

RETIRADA NA LOJA:
- Disponível em nossas lojas de Beverly Hills e Nova York
- Grátis para todos os pedidos
- Pronto em 2-4 horas
- Notificação por SMS quando disponível

PROCESSAMENTO DE PEDIDOS:

TEMPO DE PROCESSAMENTO:
- Pedidos padrão: 1-2 dias úteis
- Pedidos expressos: Mesmo dia (até 14h PST)
- Pedidos personalizados: 3-5 dias úteis
- Pré-vendas: Conforme data de lançamento informada

CORTE DE HORÁRIO:
- Segunda a Sexta: Até 16h PST para envio no mesmo dia
- Sábado: Até 12h PST para envio expresso
- Domingos e feriados: Sem processamento

EMBALAGEM ESPECIAL:
- Embalagens eco-friendly e recicláveis
- Proteção térmica para produtos sensíveis
- Embalagem discreta sem identificação externa do produto
- Materiais de proteção para transporte seguro

ENVIOS INTERNACIONAIS:

PAÍSES ATENDIDOS:
Enviamos para mais de 50 países, incluindo:
- Canadá: 7-10 dias úteis
- Reino Unido: 10-14 dias úteis
- União Europeia: 12-16 dias úteis
- Austrália: 14-18 dias úteis
- Brasil: 15-25 dias úteis
- Japão: 10-14 dias úteis

CUSTOS INTERNACIONAIS:
- Canadá: $15.99
- Europa: $24.99
- Ásia-Pacífico: $29.99
- América Latina: $34.99
- África: $39.99

IMPOSTOS E TAXAS:
- Impostos e taxas alfandegárias são responsabilidade do destinatário
- Declaramos valor real dos produtos
- Fornecemos documentação necessária para alfândega
- Parceria com DHL para facilitar processo alfandegário

RASTREAMENTO E MONITORAMENTO:

RASTREAMENTO COMPLETO:
- Código de rastreamento enviado por email e SMS
- Portal online para acompanhamento em tempo real
- Atualizações automáticas sobre status de entrega
- Notificação de entrega com foto (quando disponível)

APLICATIVO MÓVEL:
- Download gratuito na App Store e Google Play
- Notificações push para atualizações de envio
- Histórico completo de pedidos
- Chat direto com suporte de entrega

POLÍTICAS DE ENTREGA:

TENTATIVAS DE ENTREGA:
- Até 3 tentativas de entrega para endereços residenciais
- Carta de retirada deixada após tentativas
- Produto mantido no centro de distribuição por 7 dias
- Reentrega gratuita mediante reagendamento

EXIGÊNCIAS DE ASSINATURA:
- Pedidos acima de $200 requerem assinatura
- Opção de entrega sem assinatura mediante solicitação
- Entrega para vizinhos autorizados
- Caixas de correio inteligentes aceitas

ENDEREÇOS ESPECIAIS:
- Apartamentos: Número necessário para entrega
- Escritórios: Horário comercial preferencial
- APO/FPO: Envio via USPS com prazo estendido
- Caixas postais: Aceitas para produtos selecionados

PROBLEMAS DE ENTREGA:

PRODUTOS DANIFICADOS:
- Reposição gratuita em até 48 horas
- Coleta do produto danificado sem custo
- Investigação com transportadora para prevenção
- Compensação por inconveniente

PRODUTOS PERDIDOS:
- Investigação iniciada após 48h do prazo
- Reposição imediata após confirmação
- Cooperação total com transportadoras
- Seguro cobre 100% do valor

ENDEREÇO INCORRETO:
- Redirecionamento possível antes do envio
- Taxa de redirecionamento aplicável após envio
- Devolução e reenvio em caso de endereço inválido

RESTRIÇÕES DE ENVIO:

PRODUTOS RESTRITOS:
- Alguns estados têm restrições específicas para certos ingredientes
- Produtos com álcool não enviados para certas localidades
- Verificação automática durante checkout

CONDIÇÕES CLIMÁTICAS:
- Proteção especial durante verão para produtos sensíveis ao calor
- Atrasos possíveis devido a condições extremas
- Comunicação proativa sobre impactos climáticos

FERIADOS E EVENTOS:
- Cronograma especial durante feriados americanos
- Prazos estendidos durante Black Friday e temporada natalina
- Comunicação antecipada sobre alterações

SUSTENTABILIDADE:

INICIATIVAS ECO-FRIENDLY:
- Embalagens 100% recicláveis
- Compensação de carbono em todos os envios
- Parceria com transportadoras sustentáveis
- Programa de devolução de embalagens

SUPORTE DE ENTREGA:

EQUIPE ESPECIALIZADA:
- Disponível de segunda a sábado, 6h às 20h PST
- Chat online para questões urgentes
- Email: shipping@zylumia.com
- Telefone: 1-800-SHIP-ZYL (744-7995)

GARANTIAS:
- Garantia de entrega ou reembolso total
- Seguro automático em todos os envios
- Compromisso com prazos anunciados
- Satisfação garantida no processo de entrega`
    },
    "terms": {
      title: "Termos e Condições",
      content: `TERMOS E CONDIÇÕES DE USO - ZYLUMIA

DATA DE VIGÊNCIA: 01 de Janeiro de 2024
ÚLTIMA ATUALIZAÇÃO: 15 de Dezembro de 2024

Bem-vindo à Zylumia. Estes Termos e Condições ("Termos") regem o uso de nosso website, produtos e serviços. Ao acessar ou usar nossos serviços, você concorda em cumprir estes termos.

1. ACEITAÇÃO DOS TERMOS:

Ao acessar www.zylumia.com, fazer uma compra, ou usar qualquer um de nossos serviços, você automaticamente concorda com estes Termos e Condições. Se você não concorda com qualquer parte destes termos, não deve usar nossos serviços.

CAPACIDADE LEGAL:
- Você deve ter pelo menos 18 anos de idade
- Se menor de 18, deve ter consentimento dos pais/responsáveis
- Deve ter capacidade legal para firmar contratos vinculativos
- Responsável por garantir que seu uso esteja em conformidade com leis locais

2. DEFINIÇÕES:

"Zylumia", "nós", "nosso": Zylumia, Inc., uma corporação de Delaware
"Você", "usuário", "cliente": Qualquer pessoa que acesse nossos serviços
"Serviços": Website, produtos, aplicativo móvel e serviços relacionados
"Produtos": Todos os itens de cuidados com a pele vendidos pela Zylumia
"Conteúdo": Textos, imagens, vídeos e outros materiais em nossos serviços

3. USO PERMITIDO:

LICENÇA LIMITADA:
Concedemos uma licença limitada, não exclusiva e revogável para:
- Navegar e usar nosso website para fins pessoais
- Fazer compras de produtos para uso pessoal
- Acessar informações sobre produtos e cuidados com a pele

RESTRIÇÕES DE USO:
Você NÃO pode:
- Usar nossos serviços para fins comerciais sem autorização
- Copiar, distribuir ou modificar nosso conteúdo
- Interferir com funcionamento normal do website
- Tentar acessar sistemas ou dados não autorizados
- Usar bots, scrapers ou ferramentas automatizadas
- Criar contas falsas ou fraudulentas

4. PRODUTOS E SERVIÇOS:

DESCRIÇÕES DE PRODUTOS:
- Fazemos esforços para garantir precisão nas descrições
- Cores podem variar devido a configurações de monitor
- Ingredientes podem ser alterados para melhorias
- Reservamos direito de modificar produtos sem aviso prévio

DISPONIBILIDADE:
- Produtos sujeitos à disponibilidade em estoque
- Preços podem mudar sem aviso prévio
- Ofertas promocionais são por tempo limitado
- Reservamos direito de limitar quantidades por cliente

USO ADEQUADO DOS PRODUTOS:
- Destinados apenas para uso externo, salvo indicação contrária
- Realizar teste de alergia em pequena área antes do primeiro uso
- Descontinuar uso imediatamente se houver irritação
- Consultar dermatologista em caso de dúvidas
- Não usar produtos vencidos ou com aparência alterada

5. PROCESSO DE COMPRA:

PEDIDOS:
- Todos os pedidos estão sujeitos à nossa aceitação
- Confirmação de pedido não garante aceitação
- Reservamos direito de cancelar pedidos por qualquer motivo
- Limitações de quantidade podem ser aplicadas

PREÇOS E PAGAMENTO:
- Preços listados em dólares americanos (USD)
- Impostos aplicáveis serão adicionados quando necessário
- Pagamento deve ser aprovado antes do processamento
- Preços promocionais não se aplicam a pedidos anteriores

CANCELAMENTO:
- Pedidos podem ser cancelados até 2 horas após confirmação
- Após processamento, aplica-se política de devolução
- Reembolsos processados no método de pagamento original

6. PROPRIEDADE INTELECTUAL:

DIREITOS AUTORAIS:
- Todo conteúdo do site é protegido por direitos autorais
- Textos, imagens, logos e design são propriedade da Zylumia
- Uso não autorizado pode resultar em ação legal

MARCAS REGISTRADAS:
- "Zylumia" e logos relacionados são marcas registradas
- Uso de nossas marcas requer autorização expressa
- Violação de marcas pode resultar em processo judicial

CONTEÚDO DO USUÁRIO:
- Avaliações e comentários enviados se tornam nossa propriedade
- Concede-nos licença perpétua para usar seu conteúdo
- Você garante que possui direitos sobre conteúdo enviado

7. PRIVACIDADE E DADOS:

Sua privacidade é importante para nós. Nossa Política de Privacidade, incorporada por referência a estes Termos, descreve como coletamos, usamos e protegemos suas informações.

CONSENTIMENTO:
- Ao usar nossos serviços, você consente com nossa Política de Privacidade
- Podemos usar suas informações conforme descrito na política
- Você pode modificar preferências de privacidade em sua conta

8. LIMITAÇÃO DE RESPONSABILIDADE:

ISENÇÃO DE GARANTIAS:
- Produtos são fornecidos "como estão"
- Não garantimos resultados específicos
- Eficácia pode variar entre indivíduos
- Não somos responsáveis por reações alérgicas não divulgadas

LIMITAÇÃO DE DAMAGES:
- Nossa responsabilidade é limitada ao valor pago pelo produto
- Não somos responsáveis por danos indiretos ou consequenciais
- Limitações se aplicam na máxima extensão permitida por lei

EXCEÇÕES:
- Limitações não se aplicam a casos de negligência grave
- Alguns estados não permitem certas limitações
- Direitos legais específicos podem não ser limitados

9. INDENIZAÇÃO:

Você concorda em indenizar e isentar a Zylumia de qualquer reclamação, dano ou despesa resultante de:
- Seu uso inadequado de nossos produtos
- Violação destes Termos e Condições
- Violação de direitos de terceiros
- Uso de produtos vencidos ou alterados

10. RESOLUÇÃO DE DISPUTAS:

ARBITRAGEM:
- Disputas serão resolvidas através de arbitragem vinculante
- Arbitragem conduzida conforme regras da American Arbitration Association
- Local da arbitragem: Los Angeles, Califórnia
- Lei aplicável: Leis do Estado da Califórnia

EXCEÇÕES À ARBITRAGEM:
- Questões de propriedade intelectual
- Ações em tribunal de pequenas causas
- Medidas cautelares urgentes

11. MODIFICAÇÕES:

ALTERAÇÕES NOS TERMOS:
- Reservamos direito de modificar estes termos a qualquer momento
- Mudanças significativas serão comunicadas por email
- Uso continuado após mudanças constitui aceitação
- Versão mais recente sempre disponível no website

DESCONTINUAÇÃO DE SERVIÇOS:
- Podemos descontinuar ou modificar serviços a qualquer momento
- Tentaremos fornecer aviso prévio quando possível
- Não somos responsáveis por inconvenientes resultantes

12. DISPOSIÇÕES GERAIS:

LEI APLICÁVEL:
- Estes termos são regidos pelas leis da Califórnia
- Disputas sujeitas à jurisdição dos tribunais da Califórnia
- Se alguma disposição for inválida, as demais permanecem válidas

ACORDO COMPLETO:
- Estes termos constituem o acordo completo entre as partes
- Substituem todos os acordos anteriores sobre o assunto
- Modificações devem ser feitas por escrito

RENÚNCIA:
- Falha em fazer cumprir qualquer direito não constitui renúncia
- Renúncias devem ser expressas e por escrito
- Renúncia de um direito não afeta outros direitos

13. INFORMAÇÕES DE CONTATO:

Para questões sobre estes Termos e Condições:

ZYLUMIA, INC.
Endereço: 123 Beverly Hills Boulevard, Beverly Hills, CA 90210
Telefone: 1-800-ZYLUMIA (995-8642)
Email: legal@zylumia.com

Horário de atendimento jurídico:
Segunda a Sexta: 9h às 17h PST

Para questões urgentes:
Email: urgent@zylumia.com
Telefone de emergência: 1-800-URGENT-Z (874-3689)

AO USAR NOSSOS SERVIÇOS, VOCÊ RECONHECE QUE LEU, ENTENDEU E CONCORDA EM CUMPRIR ESTES TERMOS E CONDIÇÕES.`
    },
    "faq": {
      title: "Perguntas frequentes",
      content: `PERGUNTAS FREQUENTES - ZYLUMIA

SOBRE NOSSOS PRODUTOS:

1. COMO USAR OS PRODUTOS ZYLUMIA?
Para melhores resultados, siga estes passos:
- Lave o rosto com água morna e seque delicadamente
- Aplique uma pequena quantidade do produto (tamanho de uma ervilha)
- Massageie suavemente em movimentos circulares ascendentes
- Aguarde absorção completa antes de aplicar outros produtos
- Use protetor solar durante o dia
- Para melhores resultados, use consistentemente por 4-6 semanas

2. QUANTO TEMPO PARA VER RESULTADOS?
Os resultados variam por pessoa e produto:
- Hidratação: Imediata a 1 semana
- Textura da pele: 2-3 semanas
- Linhas finas: 4-6 semanas
- Manchas escuras: 6-8 semanas
- Resultados completos: 8-12 semanas de uso consistente

3. É SEGURO PARA PELE SENSÍVEL?
Sim! Nossos produtos são formulados para todos os tipos de pele:
- Testados dermatologicamente
- Fórmulas hipoalergênicas
- Sem fragrâncias artificiais irritantes
- pH balanceado
- Recomendamos sempre fazer teste de alergia em pequena área primeiro

4. POSSO USAR COM OUTROS PRODUTOS?
Sim, mas com cuidado:
- Introduza um produto novo por vez
- Aguarde 1-2 semanas entre novos produtos
- Evite misturar ácidos diferentes no mesmo horário
- Use vitamina C pela manhã e retinol à noite
- Sempre use protetor solar ao usar ácidos

5. QUAL A DURABILIDADE DOS PRODUTOS?
- Produtos não abertos: 36 meses
- Após abertura: 12-18 meses
- Verifique símbolo PAO (Period After Opening) na embalagem
- Armazene em local fresco e seco
- Evite exposição direta ao sol

PEDIDOS E ENVIO:

6. COMO FAÇO UM PEDIDO?
- Navegue pelos produtos em nosso site
- Adicione itens ao carrinho
- Preencha informações de envio e pagamento
- Revise seu pedido e confirme
- Receba confirmação por email

7. QUAIS MÉTODOS DE PAGAMENTO VOCÊS ACEITAM?
- Cartões de crédito (Visa, Mastercard, Amex, Discover)
- PayPal
- Apple Pay e Google Pay
- Klarna (parcelamento)
- Afterpay (4x sem juros)

8. QUANTO TEMPO DEMORA A ENTREGA?
- Envio padrão: 5-7 dias úteis (grátis acima de $35)
- Envio expresso: 2-3 dias úteis ($12.99)
- Envio overnight: 1 dia útil ($24.99)
- Internacional: 7-21 dias úteis

9. VOCÊS ENVIAM PARA O BRASIL?
Sim! Enviamos para mais de 50 países:
- Prazo: 15-25 dias úteis
- Custo: $34.99
- Impostos por conta do destinatário
- Rastreamento completo incluído

DEVOLUÇÃO E REEMBOLSO:

10. QUAL É A POLÍTICA DE DEVOLUÇÃO?
- Garantia de 60 dias
- Reembolso integral mesmo se usado
- Frete de devolução grátis
- Processamento em 5 dias úteis

11. COMO FAÇO UMA DEVOLUÇÃO?
- Entre em contato: returns@zylumia.com
- Receba etiqueta de devolução gratuita
- Embale o produto na caixa original
- Envie pelos correios
- Acompanhe o reembolso por email

12. POSSO TROCAR UM PRODUTO?
Sim:
- Entre em contato conosco primeiro
- Explicar motivo da troca
- Processo similar à devolução
- Novo produto enviado após recebimento

INGREDIENTES E FORMULAÇÃO:

13. VOCÊS TESTAM EM ANIMAIS?
Não! Somos 100% cruelty-free:
- Certificados pela PETA
- Nunca testamos em animais
- Fornecedores também são cruelty-free
- Métodos alternativos de teste aprovados

14. OS PRODUTOS SÃO VEGANOS?
A maioria sim:
- Indicação clara nos produtos veganos
- Alguns contêm ingredientes de origem animal (mel, cera de abelha)
- Lista completa de ingredientes sempre disponível
- Filtro "vegano" disponível no site

15. QUAIS INGREDIENTES VOCÊS USAM?
Ingredientes cientificamente comprovados:
- Ácido hialurônico: Hidratação profunda
- Vitamina C: Antioxidante e clareamento
- Retinol: Anti-aging e renovação celular
- Niacinamida: Controle de oleosidade
- Peptídeos: Firmeza e elasticidade

CUIDADOS ESPECÍFICOS:

16. POSSO USAR DURANTE A GRAVIDEZ?
Consulte seu médico primeiro:
- Alguns ingredientes não são recomendados
- Retinol e ácido salicílico: Evitar
- Vitamina C e ácido hialurônico: Geralmente seguros
- Lista de produtos seguros disponível

17. COMO CUIDAR DA PELE OLEOSA?
Recomendações específicas:
- Limpeza suave 2x ao dia
- Ácido salicílico para controle de oleosidade
- Hidratante livre de óleos
- Protetor solar não comedogênico
- Evite produtos muito agressivos

18. E PARA PELE SECA?
Foco na hidratação:
- Limpeza cremosa
- Séruns com ácido hialurônico
- Hidratante com ceramidas
- Óleos faciais à noite
- Evite produtos com álcool

SUPORTE TÉCNICO:

19. NÃO CONSIGO FAZER LOGIN/CADASTRO
Soluções comuns:
- Limpe cache e cookies do navegador
- Tente navegador diferente
- Verifique se email está correto
- Entre em contato se problema persistir

20. O SITE ESTÁ LENTO
- Verifique sua conexão de internet
- Tente em horário diferente
- Limpe cache do navegador
- Use versão mobile se desktop estiver lento

21. ESQUECI MINHA SENHA
- Clique em "Esqueci minha senha" no login
- Verifique email (incluindo spam)
- Siga instruções no email
- Entre em contato se não receber

PROGRAMA DE FIDELIDADE:

22. VOCÊS TÊM PROGRAMA DE PONTOS?
Sim! Zylumia Rewards:
- 1 ponto para cada $1 gasto
- 100 pontos = $5 de desconto
- Pontos por aniversário e avaliações
- Níveis VIP com benefícios exclusivos

23. COMO FUNCIONAM OS NÍVEIS VIP?
- Bronze: $0-$249 gastos
- Prata: $250-$499 (5% desconto extra)
- Ouro: $500-$999 (10% desconto extra)
- Platina: $1000+ (15% desconto + frete grátis)

CONTATO E SUPORTE:

24. COMO ENTRAR EM CONTATO?
Múltiplas opções:
- Email: support@zylumia.com
- Telefone: 1-800-ZYLUMIA (995-8642)
- Chat online: 24/7 no site
- WhatsApp: +1 (555) 123-ZYLUMIA
- Redes sociais: @ZylumiaOfficial

25. QUAL HORÁRIO DE ATENDIMENTO?
- Segunda a Sexta: 6h às 20h PST
- Sábado: 8h às 16h PST
- Domingo: 10h às 14h PST
- Chat online: 24/7
- Email: Resposta em até 24h

26. POSSO VISITAR UMA LOJA FÍSICA?
Sim! Temos duas localizações:
- Beverly Hills: 123 Beverly Hills Blvd
- Nova York: 456 Fifth Avenue
- Horários: Seg-Sáb 10h-19h, Dom 12h-17h
- Consultas gratuitas com especialistas

INFORMAÇÕES ESPECÍFICAS:

27. VOCÊS OFERECEM CONSULTAS PERSONALIZADAS?
Sim! Serviços incluem:
- Análise de tipo de pele online
- Consulta com dermatologista (taxa adicional)
- Rotina personalizada gratuita
- Acompanhamento mensal por email

28. COMO SABER QUAL PRODUTO É IDEAL PARA MIM?
- Quiz de tipo de pele no site (2 minutos)
- Consulta gratuita por chat
- Análise de foto da pele via app
- Recomendações baseadas em histórico de compras

29. VOCÊS TÊM GARANTIA DE RESULTADOS?
Sim:
- Garantia de satisfação de 60 dias
- Se não ver resultados, devolvemos 100% do valor
- Suporte durante todo o processo
- Ajustes na rotina sem custo adicional

30. POSSO CANCELAR ASSINATURA DE EMAIL?
Sim:
- Link para descadastro em todos os emails
- Configurações de preferência na conta
- Opção de reduzir frequência sem cancelar
- Descadastro efetivo em até 48h

Ainda tem dúvidas? Nossa equipe está sempre pronta para ajudar!`
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Zylumia</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Cuidados com a pele que transformam sua rotina de beleza. 
              Produtos premium com ingredientes cientificamente comprovados.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links rápidos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <button 
                  onClick={() => setSelectedPolicy("about")}
                  className="hover:text-primary-foreground transition-colors text-left"
                >
                  Sobre nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setSelectedPolicy("refunds")}
                  className="hover:text-primary-foreground transition-colors text-left"
                >
                  Reembolsos e Pagamentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setSelectedPolicy("privacy")}
                  className="hover:text-primary-foreground transition-colors text-left"
                >
                  Política de Privacidade
                </button>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Políticas</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <button 
                  onClick={() => setSelectedPolicy("shipping")}
                  className="hover:text-primary-foreground transition-colors text-left"
                >
                  Política de envio e entrega
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setSelectedPolicy("terms")}
                  className="hover:text-primary-foreground transition-colors text-left"
                >
                  Termos e Condições
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setSelectedPolicy("faq")}
                  className="hover:text-primary-foreground transition-colors text-left"
                >
                  Perguntas frequentes
                </button>
              </li>
            </ul>
          </div>

          {/* Atendimento */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Atendimento</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 14h</p>
              <p>WhatsApp: (11) 99999-9999</p>
              <p>Email: contato@nitfora.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Zylumia. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Policy Modal */}
      <Dialog open={!!selectedPolicy} onOpenChange={() => setSelectedPolicy(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-4">
              <button 
                onClick={() => setSelectedPolicy(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="text-center flex-1">
                <h2 className="text-3xl font-bold text-primary mb-2">Zylumia</h2>
                <DialogTitle className="text-xl font-semibold">
                  {selectedPolicy && policies[selectedPolicy as keyof typeof policies]?.title}
                </DialogTitle>
              </div>
            </div>
          </DialogHeader>
          
          <div className="prose max-w-none">
            <div className="whitespace-pre-line text-sm leading-relaxed">
              {selectedPolicy && policies[selectedPolicy as keyof typeof policies]?.content}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;