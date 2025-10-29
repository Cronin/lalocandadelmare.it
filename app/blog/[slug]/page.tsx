import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { siteConfig } from '@/site.config';

// COMPLETE BLOG ARTICLES WITH FULL CONTENT (1500+ words each)
export const blogPosts = [
  {
    slug: 'quanto-costa-elettricista-padova',
    title: 'Quanto Costa un Elettricista a Padova? Guida ai Prezzi 2025',
    excerpt: 'Scopri i costi medi per i lavori elettrici a Padova: emergenze, installazioni, certificazioni e molto altro.',
    date: '2025-01-15',
    category: 'Prezzi e Costi',
    author: 'Team Elettricista Padova',
    content: `
      <h2>Guida Completa ai Prezzi degli Elettricisti a Padova</h2>
      
      <p>Se stai cercando un elettricista a Padova, una delle prime domande che ti fai è: "Quanto mi costerà?" In questa guida completa, analizzeremo in dettaglio tutti i costi associati ai servizi elettrici nella città del Santo, aiutandoti a comprendere cosa aspettarti e come ottenere il miglior rapporto qualità-prezzo.</p>

      <h3>Tariffe Orarie degli Elettricisti a Padova</h3>
      
      <p>Le tariffe orarie degli elettricisti a Padova variano in base a diversi fattori:</p>
      
      <ul>
        <li><strong>Tariffa diurna (8:00-20:00):</strong> €40-60 all'ora</li>
        <li><strong>Tariffa serale (20:00-23:00):</strong> €60-80 all'ora</li>
        <li><strong>Tariffa notturna (23:00-8:00):</strong> €80-120 all'ora</li>
        <li><strong>Festivi e domeniche:</strong> €90-150 all'ora</li>
      </ul>

      <p>Queste tariffe includono la manodopera ma non i materiali, che vengono generalmente fatturati a parte. È importante notare che molti elettricisti applicano una tariffa minima per chiamata, indipendentemente dalla durata dell'intervento.</p>

      <h3>Costi per Interventi di Emergenza</h3>
      
      <p>Le emergenze elettriche richiedono un intervento immediato, 24 ore su 24. A Padova, il costo per un pronto intervento è strutturato così:</p>
      
      <ul>
        <li><strong>Chiamata di emergenza (costo fisso):</strong> €80-120</li>
        <li><strong>Prima ora di lavoro:</strong> €100-150</li>
        <li><strong>Ore successive:</strong> €60-100 all'ora</li>
      </ul>

      <p>Nel costo della chiamata è generalmente incluso:</p>
      <ul>
        <li>Arrivo sul posto entro 30-60 minuti</li>
        <li>Diagnosi del problema</li>
        <li>Preventivo per la riparazione</li>
        <li>Piccole riparazioni immediate (se possibile)</li>
      </ul>

      <h3>Prezzi per Riparazioni Comuni</h3>
      
      <h4>Riparazione Prese e Interruttori</h4>
      <ul>
        <li>Sostituzione presa elettrica: €25-40 (materiali inclusi)</li>
        <li>Sostituzione interruttore semplice: €20-35</li>
        <li>Sostituzione deviatore: €30-45</li>
        <li>Riparazione presa che non funziona: €40-70</li>
      </ul>

      <h4>Riparazione Impianto di Illuminazione</h4>
      <ul>
        <li>Sostituzione lampadario: €50-100</li>
        <li>Installazione punto luce: €80-150</li>
        <li>Riparazione circuito luci: €70-200</li>
        <li>Installazione dimmer: €60-90</li>
      </ul>

      <h4>Problemi al Quadro Elettrico</h4>
      <ul>
        <li>Sostituzione salvavita: €80-150</li>
        <li>Sostituzione magnetotermico: €50-100</li>
        <li>Riparazione perdita corrente: €100-250</li>
        <li>Controllo e diagnosi quadro: €60-120</li>
      </ul>

      <h3>Costi per Installazioni Nuove</h3>
      
      <h4>Impianto Elettrico Nuovo (Appartamento)</h4>
      
      <p>Per un appartamento di medie dimensioni (80-100 mq) a Padova, i costi sono:</p>
      
      <ul>
        <li><strong>Impianto base (solo punti luce e prese):</strong> €2,500-4,000</li>
        <li><strong>Impianto medio (include TV, telefono, citofono):</strong> €4,000-6,000</li>
        <li><strong>Impianto avanzato (domotica base):</strong> €6,000-10,000</li>
        <li><strong>Impianto domotico completo:</strong> €10,000-20,000</li>
      </ul>

      <p>Il costo al metro quadro varia da €30 a €100/mq, a seconda della complessità dell'impianto.</p>

      <h4>Installazione Condizionatori</h4>
      <ul>
        <li>Predisposizione elettrica monosplit: €150-250</li>
        <li>Predisposizione elettrica multisplit (2-4 unità): €300-600</li>
        <li>Linea dedicata con interruttore magnetotermico: €200-350</li>
      </ul>

      <h4>Installazione Colonnina Ricarica Auto Elettrica</h4>
      <ul>
        <li>Wallbox semplice (3,7 kW): €800-1,200 (installazione inclusa)</li>
        <li>Wallbox media potenza (7,4 kW): €1,200-1,800</li>
        <li>Wallbox alta potenza (11-22 kW): €2,000-3,500</li>
      </ul>

      <p>Questi prezzi includono: cavo dedicato dal quadro, interruttore magnetotermico differenziale, installazione della colonnina e certificazione.</p>

      <h3>Rifacimento Impianto Elettrico</h3>
      
      <p>Il rifacimento completo dell'impianto elettrico a Padova comporta costi significativi ma è fondamentale per la sicurezza:</p>
      
      <ul>
        <li><strong>Appartamento 50 mq:</strong> €2,000-3,500</li>
        <li><strong>Appartamento 80 mq:</strong> €3,500-5,500</li>
        <li><strong>Appartamento 100 mq:</strong> €4,500-7,000</li>
        <li><strong>Villa 200 mq:</strong> €8,000-15,000</li>
      </ul>

      <p>Il rifacimento include:</p>
      <ul>
        <li>Rimozione vecchio impianto</li>
        <li>Realizzazione tracce</li>
        <li>Posa nuovi cavi e tubi corrugati</li>
        <li>Installazione nuovo quadro elettrico</li>
        <li>Installazione prese, interruttori, punti luce</li>
        <li>Certificazione di conformità</li>
      </ul>

      <h3>Certificazioni e Pratiche</h3>
      
      <h4>Dichiarazione di Conformità (DM 37/08)</h4>
      
      <p>Obbligatoria per legge per impianti nuovi o ristrutturati:</p>
      <ul>
        <li>Appartamento piccolo (fino 60 mq): €150-250</li>
        <li>Appartamento medio (60-100 mq): €250-400</li>
        <li>Appartamento grande (oltre 100 mq): €400-600</li>
        <li>Villa o immobile commerciale: €600-1,500</li>
      </ul>

      <h4>Pratiche ENEL e Contatore</h4>
      <ul>
        <li>Richiesta nuovo allaccio: €300-500 (solo pratiche)</li>
        <li>Aumento potenza contatore: €200-350</li>
        <li>Spostamento contatore: €400-800</li>
      </ul>

      <h3>Installazione Sistemi Domotici</h3>
      
      <p>La domotica sta diventando sempre più popolare a Padova. I costi variano in base alla complessità:</p>
      
      <h4>Sistema Base</h4>
      <ul>
        <li>Controllo luci (5-10 punti luce): €800-1,500</li>
        <li>Controllo tapparelle (4-6 tapparelle): €600-1,200</li>
        <li>Termostato smart: €200-400</li>
      </ul>

      <h4>Sistema Medio</h4>
      <ul>
        <li>Controllo luci + tapparelle + clima: €2,500-4,000</li>
        <li>Sistema antintrusione integrato: €1,500-3,000</li>
        <li>Videocitofono smart: €400-800</li>
      </ul>

      <h4>Sistema Avanzato</h4>
      <ul>
        <li>Domotica completa KNX o MyHome: €8,000-20,000</li>
        <li>Controllo consumi energetici: €500-1,200</li>
        <li>Integrazione impianto fotovoltaico: €1,000-2,500</li>
      </ul>

      <h3>Illuminazione LED</h3>
      
      <p>La conversione a LED è un investimento che si ripaga nel tempo:</p>
      
      <ul>
        <li>Sostituzione singolo punto luce con LED: €15-40</li>
        <li>Conversione completa appartamento (15-20 punti): €400-800</li>
        <li>Installazione strisce LED: €50-150 al metro</li>
        <li>Faretti LED da incasso: €30-60 cadauno (installazione inclusa)</li>
        <li>Pannelli LED: €80-200 cadauno</li>
      </ul>

      <h3>Manutenzione Programmata</h3>
      
      <p>La manutenzione preventiva può evitare costose emergenze:</p>
      
      <ul>
        <li>Controllo annuale impianto domestico: €80-150</li>
        <li>Verifica e pulizia quadro elettrico: €60-100</li>
        <li>Test impianto di terra: €50-80</li>
        <li>Termografia impianto elettrico: €200-400</li>
      </ul>

      <h3>Fattori che Influenzano il Prezzo</h3>
      
      <h4>1. Orario dell'Intervento</h4>
      <p>Come abbiamo visto, gli interventi notturni e festivi costano significativamente di più.</p>

      <h4>2. Urgenza</h4>
      <p>Un'emergenza costa 50-100% in più rispetto a un intervento programmato.</p>

      <h4>3. Complessità del Lavoro</h4>
      <p>Lavori che richiedono diagnosi complesse o competenze specialistiche (domotica, industriale) hanno tariffe più alte.</p>

      <h4>4. Materiali Utilizzati</h4>
      <p>I materiali di qualità costano di più ma garantiscono durata e sicurezza. Un interruttore di marca costa €15-30, uno economico €3-8.</p>

      <h4>5. Accessibilità</h4>
      <p>Lavori in luoghi difficilmente accessibili (soffitti alti, sottotetti, ecc.) richiedono più tempo e attrezzature.</p>

      <h4>6. Zona di Padova</h4>
      <p>Alcune zone periferiche potrebbero comportare un piccolo supplemento per il trasferimento.</p>

      <h3>Come Risparmiare sui Lavori Elettrici</h3>
      
      <h4>1. Pianifica in Anticipo</h4>
      <p>Gli interventi programmati costano meno delle emergenze. Se possibile, evita di rimandare piccole riparazioni che potrebbero diventare problemi maggiori.</p>

      <h4>2. Raggruppa i Lavori</h4>
      <p>Se hai più lavori da fare, falli eseguire tutti insieme. Risparmierai sulla chiamata e il tecnico potrebbe applicare uno sconto.</p>

      <h4>3. Richiedi Più Preventivi</h4>
      <p>Confronta almeno 3 preventivi, ma non scegliere automaticamente il più economico. Valuta anche esperienza e recensioni.</p>

      <h4>4. Approfitta delle Detrazioni Fiscali</h4>
      <p>Molti lavori elettrici godono di detrazioni fiscali del 50% (ristrutturazioni) o 65% (risparmio energetico).</p>

      <h4>5. Evita le Emergenze</h4>
      <p>La manutenzione preventiva costa meno delle riparazioni d'emergenza. Un controllo annuale può evitare brutte sorprese.</p>

      <h3>Cosa Include un Preventivo Completo</h3>
      
      <p>Un preventivo professionale dovrebbe sempre includere:</p>
      
      <ul>
        <li>Descrizione dettagliata dei lavori</li>
        <li>Costo della manodopera</li>
        <li>Elenco e costo dei materiali</li>
        <li>Tempi di esecuzione</li>
        <li>Eventuale certificazione inclusa</li>
        <li>Garanzia sui lavori</li>
        <li>Modalità di pagamento</li>
        <li>Validità del preventivo</li>
      </ul>

      <h3>Quando Diffidare</h3>
      
      <p>Alcuni segnali di allarme:</p>
      
      <ul>
        <li>Prezzi troppo bassi rispetto alla media</li>
        <li>Richiesta di pagamento anticipato completo</li>
        <li>Nessuna fattura o ricevuta</li>
        <li>Preventivi vaghi senza dettagli</li>
        <li>Promesse irrealistiche</li>
        <li>Pressione per decidere subito</li>
      </ul>

      <h3>Conclusioni</h3>
      
      <p>I costi per un elettricista a Padova variano ampiamente in base al tipo di intervento, all'orario e alla complessità del lavoro. In media, per una riparazione semplice puoi aspettarti di spendere €50-150, mentre per installazioni nuove o rifacimenti gli importi possono salire a diverse migliaia di euro.</p>

      <p>La chiave è sempre:</p>
      <ul>
        <li>Richiedere preventivi dettagliati</li>
        <li>Verificare certificazioni e assicurazioni</li>
        <li>Leggere recensioni di altri clienti</li>
        <li>Non scegliere solo in base al prezzo più basso</li>
        <li>Pretendere sempre regolare fattura e garanzia</li>
      </ul>

      <p>Ricorda: un elettricista qualificato non è una spesa, ma un investimento nella sicurezza della tua casa o ufficio.</p>

      <div class="cta-box">
        <h3>Hai Bisogno di un Preventivo?</h3>
        <p>Contattaci per un sopralluogo e preventivo gratuito a Padova. I nostri elettricisti certificati sono disponibili 24/7 per emergenze e interventi programmati.</p>
        <p><strong>☎️ Chiamaci: ${siteConfig.phone}</strong></p>
      </div>
    `
  },
  {
    slug: 'come-riconoscere-emergenza-elettrica',
    title: 'Come Riconoscere un\'Emergenza Elettrica e Quando Chiamare',
    excerpt: 'Impara a identificare i segnali di pericolo negli impianti elettrici e quando è necessario l\'intervento urgente.',
    date: '2025-01-12',
    category: 'Sicurezza',
    author: 'Team Elettricista Padova',
    content: `
      <h2>Guida Completa alle Emergenze Elettriche: Riconoscerle e Gestirle</h2>
      
      <p>Gli impianti elettrici sono fondamentali nella nostra vita quotidiana, ma quando qualcosa va storto, possono rappresentare un serio pericolo. Saper riconoscere i segnali di un'emergenza elettrica può letteralmente salvare vite e proteggere la tua proprietà. In questa guida completa, imparerai a identificare situazioni pericolose e quando è essenziale chiamare immediatamente un elettricista professionista.</p>

      <h3>Cosa Costituisce un'Emergenza Elettrica?</h3>
      
      <p>Un'emergenza elettrica è qualsiasi situazione che rappresenta un pericolo immediato per persone, animali o cose. Può causare:</p>
      
      <ul>
        <li>Folgorazione (scosse elettriche)</li>
        <li>Incendi</li>
        <li>Esplosioni</li>
        <li>Danni a elettrodomestici e dispositivi elettronici</li>
        <li>Interruzione di servizi essenziali</li>
      </ul>

      <h3>Segnali di Pericolo Immediato - Chiama Subito!</h3>
      
      <h4>1. Odore di Bruciato o Plastica Fusa</h4>
      
      <p>Se percepisci un odore di bruciato proveniente da:</p>
      <ul>
        <li>Prese elettriche</li>
        <li>Interruttori</li>
        <li>Quadro elettrico</li>
        <li>Apparecchi elettrici</li>
      </ul>

      <p><strong>COSA FARE:</strong></p>
      <ol>
        <li>Stacca immediatamente l'interruttore generale</li>
        <li>Non toccare nulla se senti odore forte</li>
        <li>Chiama un elettricista d'emergenza</li>
        <li>Se vedi fiamme, chiama i vigili del fuoco (115)</li>
      </ol>

      <p><strong>PERCHÉ È PERICOLOSO:</strong> L'odore di bruciato indica surriscaldamento dei cavi, che può causare un incendio anche diverse ore dopo.</p>

      <h4>2. Scintille da Prese o Interruttori</h4>
      
      <p>Piccole scintille quando inserisci una spina sono normali, ma se vedi:</p>
      <ul>
        <li>Scintille costanti o ripetute</li>
        <li>Scintille grandi o prolungate</li>
        <li>Scintille da interruttori quando li accendi/spegni</li>
        <li>Scintille accompagnate da scoppiettii</li>
      </ul>

      <p><strong>COSA FARE:</strong></p>
      <ol>
        <li>Non utilizzare quella presa/interruttore</li>
        <li>Stacca il dispositivo se collegato</li>
        <li>Chiama immediatamente un elettricista</li>
        <li>Non tentare di "testare" la presa</li>
      </ol>

      <h4>3. Scosse Elettriche</h4>
      
      <p>Se tu o qualcuno della famiglia riceve scosse elettriche toccando:</p>
      <ul>
        <li>Elettrodomestici</li>
        <li>Rubinetti dell'acqua</li>
        <li>Termosifoni</li>
        <li>Qualsiasi superficie metallica</li>
      </ul>

      <p><strong>PERICOLO MORTALE:</strong> Questo indica un problema di messa a terra o dispersione di corrente.</p>

      <p><strong>COSA FARE:</strong></p>
      <ol>
        <li>Stacca immediatamente l'interruttore generale</li>
        <li>Non toccare l'oggetto che ha dato la scossa</li>
        <li>Chiama urgentemente un elettricista</li>
        <li>Non riattivare la corrente finché non viene riparato</li>
      </ol>

      <h4>4. Fumo dal Quadro Elettrico</h4>
      
      <p><strong>EMERGENZA MASSIMA:</strong> Fumo o fiamme dal quadro elettrico richiedono azione immediata.</p>

      <p><strong>COSA FARE:</strong></p>
      <ol>
        <li>NON toccare il quadro</li>
        <li>Chiama i vigili del fuoco (115)</li>
        <li>Evacua l'abitazione</li>
        <li>Se puoi farlo in sicurezza, stacca il contatore principale</li>
        <li>Chiama un elettricista d'emergenza</li>
      </ol>

      <h4>5. Il Salvavita Scatta Continuamente</h4>
      
      <p>Se l'interruttore differenziale (salvavita) scatta ripetutamente:</p>
      <ul>
        <li>Immediatamente dopo il riattivo</li>
        <li>Senza motivo apparente</li>
        <li>Con un rumore o scoppiettio</li>
      </ul>

      <p><strong>COSA FARE:</strong></p>
      <ol>
        <li>Non forzare il salvavita in posizione ON</li>
        <li>Stacca tutti gli apparecchi elettrici</li>
        <li>Prova a riattivarlo</li>
        <li>Se scatta ancora, c'è un problema nell'impianto</li>
        <li>Chiama un elettricista per diagnosi urgente</li>
      </ol>

      <h4>6. Cavi Esposti o Danneggiati</h4>
      
      <p>Cavi elettrici con isolamento danneggiato sono estremamente pericolosi:</p>
      <ul>
        <li>Cavi con fili visibili</li>
        <li>Cavi masticati da animali</li>
        <li>Cavi rovinati da lavori</li>
        <li>Cavi corrosi dall'umidità</li>
      </ul>

      <p><strong>COSA FARE:</strong></p>
      <ol>
        <li>Non toccare i cavi</li>
        <li>Stacca l'alimentazione del circuito</li>
        <li>Isola l'area</li>
        <li>Chiama immediatamente un elettricista</li>
      </ol>

      <h3>Situazioni Urgenti (Non Immediate ma da Risolvere Presto)</h3>
      
      <h4>1. Luci che Tremolano</h4>
      
      <p>Luci che tremolano o si abbassano possono indicare:</p>
      <ul>
        <li>Connessioni allentate (pericoloso)</li>
        <li>Sovraccarico dell'impianto</li>
        <li>Problemi al contatore ENEL</li>
        <li>Problemi di fase</li>
      </ul>

      <p><strong>QUANDO PREOCCUPARSI:</strong></p>
      <ul>
        <li>Tremolio costante</li>
        <li>Luci che si abbassano quando accendi elettrodomestici potenti</li>
        <li>Tremolii accompagnati da ronzii</li>
      </ul>

      <p><strong>AZIONE:</strong> Chiama un elettricista entro 24-48 ore per una diagnosi.</p>

      <h4>2. Prese o Interruttori Caldi</h4>
      
      <p>Prese e interruttori dovrebbero essere leggermente tiepidi al massimo.</p>

      <p><strong>SE SONO CALDI:</strong></p>
      <ul>
        <li>Smetti di usare quella presa</li>
        <li>Potrebbe esserci un sovraccarico</li>
        <li>I collegamenti potrebbero essere allentati</li>
        <li>Il dispositivo potrebbe essere difettoso</li>
      </ul>

      <p><strong>AZIONE:</strong> Fai controllare da un elettricista entro 24 ore.</p>

      <h4>3. Rumori Strani dall'Impianto</h4>
      
      <p>Ronzii, scoppiettii o sibili possono indicare:</p>
      <ul>
        <li>Connessioni allentate</li>
        <li>Componenti difettosi</li>
        <li>Armoniche nella rete</li>
        <li>Problemi al trasformatore (se è un ronzio forte)</li>
      </ul>

      <p><strong>AZIONE:</strong> Non ignorare rumori strani. Chiama per un controllo entro una settimana.</p>

      <h4>4. Troppi Fusibili/Magnetotermici che Saltano</h4>
      
      <p>Se devi resettare frequentemente gli interruttori magnetotermici:</p>
      <ul>
        <li>L'impianto è sovraccarico</li>
        <li>Potrebbe esserci un cortocircuito intermittente</li>
        <li>Un elettrodomestico potrebbe essere difettoso</li>
      </ul>

      <p><strong>AZIONE:</strong> Fai verificare l'impianto. Potresti dover distribuire meglio i carichi o aumentare la potenza.</p>

      <h3>Situazioni Specifiche</h3>
      
      <h4>Durante un Temporale</h4>
      
      <p>I fulmini possono causare sovratensioni devastanti:</p>
      
      <ul>
        <li>Stacca dispositivi elettronici costosi</li>
        <li>Non fare doccia durante temporali forti</li>
        <li>Evita di usare apparecchi collegati alla rete</li>
        <li>Se un fulmine colpisce vicino a casa, fai controllare l'impianto</li>
      </ul>

      <h4>In Caso di Allagamento</h4>
      
      <p><strong>ACQUA + ELETTRICITÀ = PERICOLO MORTALE</strong></p>

      <p><strong>SE C'È ACQUA IN CASA:</strong></p>
      <ol>
        <li>NON entrare in stanze allagate con corrente attiva</li>
        <li>Stacca il contatore generale dall'esterno</li>
        <li>Chiama un elettricista prima di riattivare</li>
        <li>L'impianto deve essere asciugato e testato</li>
      </ol>

      <h4>Dopo Lavori in Casa</h4>
      
      <p>Se hai fatto lavori (forature, tinteggiatura, ecc.) e noti:</p>
      <ul>
        <li>Interruttori che non funzionano più</li>
        <li>Prese non alimentate</li>
        <li>Il salvavita che scatta</li>
      </ul>

      <p>Potresti aver danneggiato un cavo. Chiama immediatamente un elettricista.</p>

      <h3>Come Comportarsi in un'Emergenza Elettrica</h3>
      
      <h4>Protocollo di Sicurezza BASE</h4>
      
      <ol>
        <li><strong>STOP:</strong> Ferma qualsiasi attività</li>
        <li><strong>VALUTA:</strong> La situazione è pericolosa?</li>
        <li><strong>ISOLA:</strong> Stacca l'alimentazione se puoi farlo in sicurezza</li>
        <li><strong>ALLONTANA:</strong> Tieni tutti lontani dall'area</li>
        <li><strong>CHIAMA:</strong> Elettricista d'emergenza (o vigili del fuoco se necessario)</li>
      </ol>

      <h4>Mai Fare Questo:</h4>
      
      <ul>
        <li>Toccare apparecchi elettrici con mani bagnate</li>
        <li>Tentare riparazioni senza competenze</li>
        <li>Usare acqua su incendi elettrici</li>
        <li>Ignorare odori di bruciato</li>
        <li>Sovraccaricare prese multiple</li>
        <li>Usare apparecchi con cavi danneggiati</li>
      </ul>

      <h3>Prevenzione: Meglio Prevenire che Curare</h3>
      
      <h4>Controlli Periodici Consigliati</h4>
      
      <ul>
        <li><strong>Controllo annuale impianto:</strong> Verifica generale di sicurezza</li>
        <li><strong>Test salvavita:</strong> Premi il pulsante TEST mensilmente</li>
        <li><strong>Ispezione visiva:</strong> Cerca segni di usura, scolorimento, danni</li>
        <li><strong>Controllo carichi:</strong> Verifica di non sovraccaricare l'impianto</li>
      </ul>

      <h4>Segnali che il Tuo Impianto Ha Bisogno di Attenzione</h4>
      
      <ul>
        <li>Impianto con più di 20-30 anni</li>
        <li>Prese a due poli (senza terra)</li>
        <li>Quadro elettrico con fusibili in ceramica</li>
        <li>Assenza di salvavita</li>
        <li>Cavi esterni con isolamento in tessuto</li>
        <li>Connessioni volanti (con mammut o nastro isolante)</li>
      </ul>

      <h3>Numeri Utili per Emergenze</h3>
      
      <ul>
        <li><strong>Vigili del Fuoco:</strong> 115</li>
        <li><strong>Emergenza Sanitaria:</strong> 118</li>
        <li><strong>Numero Unico Emergenze:</strong> 112</li>
        <li><strong>Guasti ENEL:</strong> 803 500</li>
        <li><strong>Elettricista Emergenza Padova:</strong> ${siteConfig.phone}</li>
      </ul>

      <h3>Quando NON È un'Emergenza</h3>
      
      <p>Alcune situazioni, pur richiedendo attenzione, non sono emergenze immediate:</p>
      
      <ul>
        <li>Una singola lampadina che non funziona</li>
        <li>Voler aggiungere prese nuove</li>
        <li>Upgrade dell'impianto</li>
        <li>Installazione condizionatore (tranne periodi di caldo estremo)</li>
        <li>Richiesta di preventivo per lavori futuri</li>
      </ul>

      <p>Per questi casi, puoi programmare un appuntamento in orario normale, risparmiando sul costo dell'intervento d'urgenza.</p>

      <h3>Conclusione</h3>
      
      <p>La sicurezza elettrica non è qualcosa su cui scherzare. Se hai qualsiasi dubbio sulla sicurezza del tuo impianto elettrico, è sempre meglio far controllare da un professionista qualificato.</p>

      <p>Ricorda:</p>
      <ul>
        <li>Gli impianti elettrici difettosi causano migliaia di incendi ogni anno</li>
        <li>La folgorazione può essere fatale</li>
        <li>Un controllo preventivo costa molto meno di una riparazione d'emergenza</li>
        <li>La sicurezza della tua famiglia non ha prezzo</li>
      </ul>

      <div class="cta-box">
        <h3>Emergenza Elettrica? Siamo Qui 24/7</h3>
        <p>Il nostro team di elettricisti certificati è disponibile 24 ore su 24, 7 giorni su 7 per emergenze a Padova e provincia. Intervento garantito entro 30-60 minuti.</p>
        <p><strong>☎️ Chiama Ora: ${siteConfig.phone}</strong></p>
      </div>
    `
  },
  {
    slug: 'certificazione-impianti-elettrici-quando-obbligatoria',
    title: 'Certificazione Impianti Elettrici: Quando è Obbligatoria?',
    excerpt: 'Tutto quello che devi sapere sulla Dichiarazione di Conformità (DM 37/08) e quando è necessaria.',
    date: '2025-01-10',
    category: 'Normative',
    author: 'Team Elettricista Padova',
    content: `
      <h2>Guida Completa alla Certificazione degli Impianti Elettrici</h2>
      
      <p>La certificazione degli impianti elettrici è un aspetto fondamentale, spesso sottovalutato, che riguarda proprietari di immobili, inquilini e professionisti. In questa guida completa scoprirai tutto quello che c'è da sapere sulla Dichiarazione di Conformità (DiCo), quando è obbligatoria, cosa comporta non averla e come ottenerla a Padova.</p>

      <h3>Cos'è la Dichiarazione di Conformità (DM 37/08)?</h3>
      
      <p>La Dichiarazione di Conformità, comunemente chiamata DiCo, è un documento ufficiale che certifica che un impianto elettrico è stato realizzato a regola d'arte, secondo le normative vigenti e in modo sicuro.</p>

      <p>È regolata dal Decreto Ministeriale 37/2008 (che ha sostituito la vecchia Legge 46/90) e deve essere rilasciata da un'impresa installatrice regolarmente iscritta alla Camera di Commercio per la categoria di lavori eseguiti.</p>

      <h4>Cosa Certifica il Documento?</h4>
      
      <ul>
        <li>L'impianto è conforme alle norme tecniche (CEI, UNI, ecc.)</li>
        <li>Sono stati utilizzati materiali certificati</li>
        <li>L'installazione è stata eseguita a regola d'arte</li>
        <li>L'impianto è sicuro per l'uso</li>
        <li>Rispetta i requisiti minimi di legge</li>
      </ul>

      <h3>Quando è Obbligatoria?</h3>
      
      <h4>1. Impianti Nuovi</h4>
      
      <p>La DiCo è sempre obbligatoria per:</p>
      <ul>
        <li>Nuove costruzioni</li>
        <li>Impianti realizzati ex novo</li>
        <li>Ampliamenti significativi (oltre il 25% dell'impianto esistente)</li>
      </ul>

      <h4>2. Ristrutturazioni Importanti</h4>
      
      <p>È richiesta quando si eseguono:</p>
      <ul>
        <li>Rifacimento completo dell'impianto elettrico</li>
        <li>Trasformazione di locali (da residenziale a commerciale o viceversa)</li>
        <li>Modifiche che alterano la tipologia dell'impianto</li>
        <li>Interventi su oltre il 25% dell'impianto esistente</li>
      </ul>

      <h4>3. Impianti Particolari</h4>
      
      <p>Sempre necessaria per:</p>
      <ul>
        <li>Impianti in ambienti a rischio (bagni, cucine, esterni)</li>
        <li>Impianti fotovoltaici</li>
        <li>Sistemi di automazione (domotica)</li>
        <li>Impianti con potenza oltre 6 kW</li>
      </ul>

      <h4>4. Compravendita Immobiliare</h4>
      
      <p>Anche se non sempre obbligatoria per legge, la DiCo è:</p>
      <ul>
        <li>Spesso richiesta dal notaio</li>
        <li>Necessaria per ottenere mutui</li>
        <li>Riduce responsabilità del venditore</li>
        <li>Aumenta il valore dell'immobile</li>
      </ul>

      <h4>5. Locazione</h4>
      
      <p>Per affittare un immobile:</p>
      <ul>
        <li>Il proprietario deve garantire la conformità</li>
        <li>In caso di incidente, la responsabilità è del proprietario</li>
        <li>Molte assicurazioni la richiedono</li>
      </ul>

      <h3>Cosa Contiene la Dichiarazione di Conformità?</h3>
      
      <h4>Documenti Obbligatori:</h4>
      
      <ol>
        <li><strong>Dichiarazione di Conformità vera e propria:</strong>
          <ul>
            <li>Dati dell'impresa installatrice</li>
            <li>Dati del committente</li>
            <li>Ubicazione dell'impianto</li>
            <li>Tipologia di impianto</li>
            <li>Dichiarazione di conformità alle norme</li>
            <li>Firma del responsabile tecnico</li>
          </ul>
        </li>
        
        <li><strong>Allegati Obbligatori:</strong>
          <ul>
            <li>Relazione dei materiali utilizzati</li>
            <li>Schema dell'impianto realizzato</li>
            <li>Riferimento ai progetti (se previsti)</li>
            <li>Rapporti di prova e verifiche</li>
            <li>Certificati dei materiali</li>
          </ul>
        </li>
      </ol>

      <h4>Per Impianti Complessi Serve Anche:</h4>
      
      <ul>
        <li>Progetto redatto da un professionista abilitato</li>
        <li>Certificato di collaudo</li>
        <li>Calcoli tecnici</li>
      </ul>

      <h3>Chi Può Rilasciare la Certificazione?</h3>
      
      <p>Solo un'impresa installatrice che:</p>
      
      <ul>
        <li>È regolarmente iscritta alla Camera di Commercio</li>
        <li>Ha i requisiti tecnico-professionali (DM 37/08, art. 4)</li>
        <li>Ha un responsabile tecnico qualificato</li>
        <li>È in regola con contributi INPS e CCIAA</li>
      </ul>

      <p><strong>NON può rilasciarla:</strong></p>
      <ul>
        <li>Un elettricista che lavora in nero</li>
        <li>Un'impresa non abilitata</li>
        <li>Un'impresa che non ha eseguito i lavori</li>
      </ul>

      <h3>Quando Serve il Progetto?</h3>
      
      <p>Il progetto firmato da un professionista abilitato (ingegnere, architetto, perito) è obbligatorio per:</p>
      
      <h4>Impianti Civili:</h4>
      <ul>
        <li>Superficie oltre 400 mq</li>
        <li>Potenza impegnata oltre 6 kW</li>
        <li>Tensione oltre 1000V</li>
        <li>Ambienti a maggior rischio (es. piscine)</li>
      </ul>

      <h4>Impianti Produttivi/Commerciali:</h4>
      <ul>
        <li>Superficie oltre 200 mq</li>
        <li>Potenza oltre 6 kW</li>
        <li>Presenza di lavoratori</li>
      </ul>

      <h3>Procedura per Ottenere la Certificazione</h3>
      
      <h4>Step 1: Affida i Lavori a un'Impresa Abilitata</h4>
      
      <p>Prima di iniziare qualsiasi lavoro, verifica che l'impresa:</p>
      <ul>
        <li>Sia iscritta alla CCIAA con la categoria corretta</li>
        <li>Abbia il responsabile tecnico</li>
        <li>Rilasci regolare fattura</li>
      </ul>

      <h4>Step 2: Esecuzione dei Lavori</h4>
      
      <p>L'impresa deve:</p>
      <ul>
        <li>Eseguire i lavori a regola d'arte</li>
        <li>Usare materiali certificati</li>
        <li>Seguire le norme tecniche</li>
        <li>Documentare i materiali usati</li>
      </ul>

      <h4>Step 3: Verifiche e Collaudo</h4>
      
      <p>Prima del rilascio della DiCo, l'impresa deve:</p>
      <ul>
        <li>Verificare la continuità elettrica</li>
        <li>Testare l'impianto di terra</li>
        <li>Verificare gli interruttori differenziali</li>
        <li>Misurare le resistenze di isolamento</li>
        <li>Testare i circuiti</li>
      </ul>

      <h4>Step 4: Compilazione della Dichiarazione</h4>
      
      <p>L'impresa compila la DiCo con:</p>
      <ul>
        <li>Tutti i dati richiesti</li>
        <li>Allegati obbligatori</li>
        <li>Schemi dell'impianto</li>
        <li>Certificati dei materiali</li>
      </ul>

      <h4>Step 5: Consegna al Cliente</h4>
      
      <p>L'impresa consegna al cliente:</p>
      <ul>
        <li>Originale della DiCo</li>
        <li>Tutti gli allegati</li>
        <li>Copia per gli enti competenti</li>
      </ul>

      <h4>Step 6: Invio al Comune (a Carico dell'Impresa)</h4>
      
      <p>Entro 30 giorni, l'impresa deve inviare:</p>
      <ul>
        <li>Copia della DiCo allo Sportello Unico per l'Edilizia (SUE)</li>
        <li>Per alcuni lavori, anche all'Azienda Sanitaria (ASL)</li>
      </ul>

      <p><strong>ATTENZIONE:</strong> A Padova questo invio avviene tramite portale online del Comune.</p>

      <h3>Tempi e Validità</h3>
      
      <h4>Tempi di Rilascio:</h4>
      <ul>
        <li>La DiCo deve essere rilasciata immediatamente a fine lavori</li>
        <li>L'invio al Comune deve avvenire entro 30 giorni</li>
      </ul>

      <h4>Validità:</h4>
      <ul>
        <li>La DiCo non ha scadenza</li>
        <li>È valida finché l'impianto non viene modificato</li>
        <li>Ogni modifica sostanziale richiede nuova certificazione</li>
      </ul>

      <h3>Cosa Succede se Non Ce l'Hai?</h3>
      
      <h4>Sanzioni Amministrative:</h4>
      
      <p>Per chi esegue lavori senza rilasciare la DiCo:</p>
      <ul>
        <li><strong>Impresa installatrice:</strong> da €1.000 a €10.000</li>
        <li><strong>Committente consapevole:</strong> da €1.000 a €10.000</li>
      </ul>

      <h4>Responsabilità Civile e Penale:</h4>
      
      <ul>
        <li>In caso di incidente, il proprietario è responsabile</li>
        <li>L'assicurazione può non coprire i danni</li>
        <li>Possibili conseguenze penali in caso di infortuni</li>
      </ul>

      <h4>Problemi Pratici:</h4>
      
      <ul>
        <li>Difficoltà nella vendita dell'immobile</li>
        <li>Problemi per ottenere mutui</li>
        <li>Non puoi affittare regolarmente</li>
        <li>Problemi con assicurazioni</li>
        <li>Il notaio può rifiutare il rogito</li>
      </ul>

      <h3>Come Regolarizzare un Impianto Non Certificato?</h3>
      
      <h4>Se l'Impianto è Recente (Meno di 10 Anni):</h4>
      
      <p>Prova a rintracciare l'impresa che ha eseguito i lavori. Se è ancora in attività e ha documentazione, può rilasciare la DiCo "tardiva".</p>

      <h4>Se l'Impianto è Vecchio o Non Trovi l'Impresa:</h4>
      
      <p>Devi far eseguire una <strong>Dichiarazione di Rispondenza</strong> (DiRi).</p>

      <h4>Cos'è la Dichiarazione di Rispondenza?</h4>
      
      <p>È un documento che certifica che un impianto esistente (anche se non conforme all'atto della realizzazione) è attualmente in uno stato di sicurezza accettabile.</p>

      <p><strong>Chi la Rilascia:</strong></p>
      <ul>
        <li>Un professionista abilitato (ingegnere, perito, geometra)</li>
        <li>Iscritto all'albo professionale</li>
        <li>Con assicurazione professionale</li>
      </ul>

      <p><strong>Procedura:</strong></p>
      <ol>
        <li>Il professionista ispeziona l'impianto</li>
        <li>Esegue verifiche e misure</li>
        <li>Valuta la rispondenza alle norme</li>
        <li>Se necessario, prescrive adeguamenti</li>
        <li>Rilascia la DiRi</li>
      </ol>

      <p><strong>Costi:</strong></p>
      <ul>
        <li>Appartamento piccolo: €300-600</li>
        <li>Appartamento grande: €600-1,200</li>
        <li>Villa: €1,000-2,500</li>
      </ul>

      <p>Se l'impianto non è conforme, vanno aggiunti i costi di adeguamento.</p>

      <h3>Certificazione per Casi Specifici</h3>
      
      <h4>Impianto Fotovoltaico</h4>
      
      <p>Richiede:</p>
      <ul>
        <li>DiCo per l'impianto elettrico</li>
        <li>Progetto (per potenza > 6 kW)</li>
        <li>Comunicazione al gestore di rete</li>
        <li>Pratica GSE per gli incentivi</li>
      </ul>

      <h4>Colonnina Ricarica Auto Elettrica</h4>
      
      <p>Necessaria:</p>
      <ul>
        <li>DiCo per il circuito dedicato</li>
        <li>Progetto se potenza > 7,4 kW</li>
        <li>Verifica idoneità dell'impianto esistente</li>
      </ul>

      <h4>Sistema Domotico</h4>
      
      <p>Serve:</p>
      <ul>
        <li>DiCo se si interviene sull'impianto elettrico</li>
        <li>Documentazione tecnica del sistema</li>
        <li>Manuale d'uso</li>
      </ul>

      <h3>Costi della Certificazione a Padova</h3>
      
      <h4>DiCo Nuova (Inclusa nei Lavori):</h4>
      
      <p>La DiCo è sempre inclusa nel prezzo dei lavori elettrici e non può essere un costo separato. Se un elettricista chiede un extra per la DiCo, diffida.</p>

      <h4>DiCo "Tardiva" (Se l'Impresa l'Ha Dimenticata):</h4>
      <ul>
        <li>Appartamento piccolo: €100-200</li>
        <li>Appartamento grande: €200-400</li>
      </ul>

      <h4>Dichiarazione di Rispondenza:</h4>
      <ul>
        <li>Appartamento 50-80 mq: €400-700</li>
        <li>Appartamento 100-150 mq: €700-1,200</li>
        <li>Villa 200+ mq: €1,200-2,500</li>
      </ul>

      <p>(Non include eventuali adeguamenti necessari)</p>

      <h3>Domande Frequenti</h3>
      
      <h4>Ho comprato casa senza DiCo, cosa faccio?</h4>
      <p>Puoi far redigere una Dichiarazione di Rispondenza da un professionista abilitato. Verifica prima se il venditore può recuperare la documentazione.</p>

      <h4>La DiCo è obbligatoria per vendere casa?</h4>
      <p>Non sempre per legge, ma molti notai la richiedono. Senza, potresti avere difficoltà nella vendita e l'acquirente potrebbe chiedere uno sconto.</p>

      <h4>Ho fatto piccoli lavori, serve la DiCo?</h4>
      <p>Dipende. Se hai solo sostituito una presa o un interruttore, no. Se hai aggiunto circuiti o modificato l'impianto, probabilmente sì.</p>

      <h4>La DiCo serve per l'assicurazione casa?</h4>
      <p>Non è sempre obbligatoria, ma in caso di sinistro, l'assicurazione potrebbe non coprire se l'impianto non è certificato.</p>

      <h4>Dopo quanti anni va rinnovata?</h4>
      <p>Non va mai rinnovata, a meno che non modifichi l'impianto. Tuttavia, dopo 30-40 anni è consigliabile rifare l'impianto.</p>

      <h4>Posso detrarre i costi?</h4>
      <p>Sì, se i lavori rientrano in una ristrutturazione, puoi detrarre il 50% in 10 anni.</p>

      <h3>Conclusioni</h3>
      
      <p>La certificazione dell'impianto elettrico non è solo un obbligo burocratico, ma una garanzia di sicurezza per te e la tua famiglia. Un impianto certificato:</p>
      
      <ul>
        <li>È sicuro e riduce il rischio di incendi e folgorazioni</li>
        <li>Vale di più sul mercato</li>
        <li>Ti protegge da responsabilità legali</li>
        <li>È richiesto per vendita, locazione e mutui</li>
      </ul>

      <div class="cta-box">
        <h3>Hai Bisogno di una Certificazione?</h3>
        <p>Il nostro team di elettricisti certificati può rilasciare Dichiarazioni di Conformità o aiutarti a regolarizzare impianti esistenti a Padova.</p>
        <p><strong>☎️ Contattaci: ${siteConfig.phone}</strong></p>
      </div>
    `
  }
];

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Articolo Non Trovato',
    };
  }
  
  return {
    title: `${post.title} | ${siteConfig.businessName}`,
    description: post.excerpt,
    keywords: `${post.title}, elettricista padova, ${post.category.toLowerCase()}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: {
      canonical: `https://${siteConfig.domain}/blog/${slug}`,
    },
  };
}

// Generate static params for all articles
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Article page component
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  // Article schema for SEO
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.businessName,
      logo: {
        '@type': 'ImageObject',
        url: `https://${siteConfig.domain}/logo.png`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://${siteConfig.domain}/blog/${slug}`,
    },
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header */}
      <header className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="mb-8">
            <a href="/blog" className="text-blue-200 hover:text-white inline-flex items-center gap-2">
              ← Torna al Blog
            </a>
          </nav>
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-ul:space-y-2
              prose-li:text-gray-700
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              [&_.cta-box]:bg-gradient-to-br [&_.cta-box]:from-blue-50 [&_.cta-box]:to-blue-100
              [&_.cta-box]:p-8 [&_.cta-box]:rounded-2xl [&_.cta-box]:my-12 [&_.cta-box]:border-2 [&_.cta-box]:border-blue-200"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Altri Articoli</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.slug !== slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <article key={relatedPost.slug} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{relatedPost.category}</div>
                  <h3 className="text-xl font-bold mb-3">
                    <a href={`/blog/${relatedPost.slug}`} className="hover:text-blue-600">
                      {relatedPost.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                  <a href={`/blog/${relatedPost.slug}`} className="text-blue-600 font-semibold hover:text-blue-700">
                    Leggi articolo →
                  </a>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hai Bisogno di un Elettricista a Padova?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Chiamaci per un intervento rapido o un preventivo gratuito
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 px-10 rounded-full text-xl transition-all duration-200 shadow-xl transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {siteConfig.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
