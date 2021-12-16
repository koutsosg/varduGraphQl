import React, { Component } from "react"
import { Accordion, Icon } from "semantic-ui-react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
export default class HealthFaqs extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Layout>
        <Seo
          title="Χρήσιμες Ερωτήσεις Υγεία"
          description="Oσο νωρίτερα επιλέξουμε να ασφαλίσουμε την υγεία μας, τόσο καλύτερα καθώς με την πάροδο των χρόνων τα προβλήματα υγείας χτυπούν συχνότερα την πόρτα μας. Σε περίπτωση που θελήσουμε να ασφαλιστούμε σε μεγάλη ηλικία, ίσως αυτό να μην μπορεί να γίνει ή να γίνει με όρους που δεν μας ικανοποιούν απόλυτα."
          siteUrl={"https://fvardi.ohmy-gad.com/xrisimes-erwtisis/faq-ygeia"}
        />
        <div className="px-5 text-left gray">
          <h1 className="pb-5 gray">Χρήσιμες Ερωτήσεις Υγεία</h1>

          <Accordion className="text-left">
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Καλύπτομαι για την μοριακή ανίχνευση του κορωνοϊού;
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p>
                Εφόσον είστε κάτοχος του προγράμματος Διαγνωστικών -
                Εξωνοσοκομειακών Εξετάσεων Full [Health] ΔΙΑΓΝΩΣΗ μπορείτε να:
                <ul>
                  <li>
                    {" "}
                    Προγραμματίσετε το ιατρικό ραντεβού σας επικοινωνώντας με
                    γιατρό ειδικότητας πνευμονολόγου ή παθολόγου ή καρδιολόγου,
                    ή ΩΡΛ του συνεργαζόμενου δικτύου της Affidea. Κατόπιν
                    εξέτασης και εφόσον κριθεί ιατρικά απαραίτητο, ο ιατρός θα
                    σας παραπέμψει για την εξέταση της Μοριακής Ανίχνευσης (PCR)
                    για τον κορωνοϊό (SARS-CoV-2). Ειδικά για τα ασφαλισμένα
                    ανήλικα παιδιά αρκεί γνωμάτευση του παιδιάτρου που να πληροί
                    τις απαραίτητες ιατρικές προϋποθέσεις διενέργειας της
                    εξέτασης.
                  </li>
                  <li>
                    {" "}
                    Πραγματοποιήσετε την εξέταση της Μοριακής Ανίχνευσης (PCR)
                    για τον κορωνοϊό (SARS-CoV-2), σε κατάλληλα εξοπλισμένο
                    διαγνωστικό κέντρο της Affidea προσκομίζοντας το
                    παραπεμπτικό σας με συμμετοχή σας ύψους 12€ για τον αρχικό
                    έλεγχο και 6€ για κάθε επιπλέον επαναληπτικό έλεγχο που
                    πιθανόν απαιτηθεί.
                  </li>
                </ul>
              </p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Γιατί είναι αναγκαία η συμπληρωματική ιδιωτική ασφάλιση υγείας;
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p>
                Επιλέγουμε την Ιδιωτική Ασφάλιση Υγείας γιατί: Τ
                <ul>
                  <li>
                    Το κόστος μιας αξιοπρεπούς νοσηλείας σε ιδιωτικά
                    νοσηλευτήρια είναι πολύ υψηλό.
                  </li>
                  <li>
                    Ο συμπληρωματικός ρόλος της ιδιωτικής ασφάλισης είναι η
                    καλύτερη λύση στην αντιμετώπιση των υψηλών εξόδων περίθαλψης
                    και παρέχει στον ασφαλισμένο την πολυπόθητη «αίσθηση της
                    ασφάλειας».
                  </li>
                  <li>
                    Η αύξηση του μέσου ορίου ηλικίας των Ελλήνων&nbsp;έχει σαν
                    αποτέλεσμα την αύξηση των προβλημάτων υγείας και επομένως
                    την αύξηση των δαπανών για αγορά υπηρεσιών υγείας κυρίως
                    στην τρίτη ηλικία.
                  </li>
                </ul>
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 8}
              index={8}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Ποια είναι η κατάλληλη στιγμή για να ασφαλίσω την Υγεία μου;
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 8}>
              <p>
                Όσο νωρίτερα επιλέξουμε να ασφαλίσουμε την υγεία μας, τόσο
                καλύτερα καθώς με την πάροδο των χρόνων τα προβλήματα υγείας
                χτυπούν συχνότερα την πόρτα μας. Σε περίπτωση που θελήσουμε να
                ασφαλιστούμε σε μεγάλη ηλικία, ίσως αυτό να μην μπορεί να γίνει
                ή να γίνει με όρους που δεν μας ικανοποιούν απόλυτα.
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Γιατί να κάνω ασφάλιση Υγείας στην Εθνική Ασφαλιστική;
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <p>
                Γιατί η Εθνική Ασφαλιστική:
                <ol>
                  <li>
                    Είναι εταιρία φερέγγυα,&nbsp;με&nbsp;κύρος και ιστορία
                  </li>
                  <li>
                    Έχει πολύχρονη πείρα και παρουσία στην αγορά πάνω από ένα
                    αιώνα
                  </li>
                  <li>Διαθέτει μεγάλο πελατολόγιο</li>
                  <li>
                    Προσφέρει ανταγωνιστικά και δυναμικά προϊόντα που καλύπτουν
                    τις συνεχώς μεταβαλλόμενες ανάγκες των πελατών της
                  </li>
                  <li>
                    Φροντίζει διαρκώς για την ικανοποίηση των πελατών της
                    &nbsp;από τις υπηρεσίες που λαμβάνουν
                  </li>
                  <li>
                    Απευθύνεται σε όλες τις κοινωνικοοικονομικές τάξεις
                    προσφέροντας&nbsp; ευρεία γκάμα προϊόντων
                  </li>
                  <li>Έχει πελατοκεντρική φιλοσοφία</li>
                </ol>
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 3}
              index={3}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Κάθε πότε μπορώ να πληρώνω τα ασφάλιστρα μου (μήνα, τρίμηνο,
              εξάμηνο, χρόνο);
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
              <p>
                Στα προγράμματα ασφάλισης, τα ασφάλιστρα είναι ετήσια. Μπορείτε
                όμως να τα καταβάλλετε σε:
                <ul>
                  <li>Εξαμηνιαίες δόσεις,, με προσαύξηση 2%</li>
                  <li>Τριμηνιαίες δόσεις, με προσαύξηση 3%</li>
                  <li>Μηνιαίες δόσεις, με προσαύξηση 4%</li>
                </ul>
                Η εξόφληση του ασφαλίστρου σε μηνιαίες δόσεις γίνεται μόνο όταν
                και η πληρωμή γίνεται με χρέωση της πιστωτικής σας κάρτας ή με
                χρέωση του τραπεζικού σας λογαριασμού και το ετήσιο ασφάλιστρο
                είναι τουλάχιστον €360 (€30 το μήνα).
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 4}
              index={4}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Εάν έχω επιλέξει ένα νοσοκομειακό πρόγραμμα μπορώ να ασφαλίσω με
              το ίδιο ή άλλο νοσοκομειακό πρόγραμμα την οικογένεια μου;
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 4}>
              <p>
                Έχετε τη δυνατότητα στο ασφαλιστήριο σας να ασφαλίσετε την
                οικογένειά σας (σύζυγο και παιδιά μικρότερα των 18 ετών) με το
                νοσοκομειακό πρόγραμμα που έχετε ο ίδιος, ή και με διαφορετικό
                πρόγραμμα νοσοκομειακής περίθαλψης εφόσον αυτό περιέχει
                λιγότερες παροχές/ καλύψεις από αυτό του κυρίως ασφαλισμένου,
                αρκεί όλα τα εξαρτώμενα μέλη να έχουν το ίδιο πρόγραμμα.
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 5}
              index={5}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Σε περίπτωση άμεσης ανάγκης για ιατρική βοήθεια, η εταιρία μου
              παρέχει τη δυνατότητα ιατρικών συμβουλών πρώτων βοηθειών από το
              τηλέφωνο (συντονιστικό κέντρο);
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 5}>
              <p>
                Σε περίπτωση ανάγκης για ιατρική βοήθεια το μόνο που χρειάζεται
                να κάνετε είναι να επικοινωνήσετε με το τηλεφωνικό μας κέντρο.
                Το τηλεφωνικό κέντρο <a href="tel:18189">18189</a> (Ελλάδα) ή
                στο +<a href="tel:2130318189">302130318189</a> (Ελλάδα και
                εξωτερικό)*,&nbsp;λειτουργεί σε 24ωρη βάση, 365 ημέρες το χρόνο
                και σας παρέχει:
                <ul>
                  <li>
                    Ιατρικές συμβουλές από εφημερεύοντες ιατρούς. Άμεσες
                    συμβουλές για κάθε πρόβλημα υγείας.
                  </li>
                  <li>
                    Πληροφορίες για το δίκτυο ιατρών. Επικοινωνήστε με το
                    τηλεφωνικό κέντρο κάθε φορά που χρειάζεστε ιατρό, για να
                    μάθετε ποιοι συνεργάζονται, τις ειδικότητες τους, τις
                    διευθύνσεις τους, την αμοιβή τους κ.ά.
                  </li>
                  <li>
                    Πληροφορίες για τη διενέργεια διαγνωστικών εξετάσεων, καθώς
                    και για το δίκτυο των διαγνωστικών κέντρων.
                  </li>
                  <li>
                    Πληροφορίες για τα Συμβεβλημένα και Συνεργαζόμενα
                    Νοσοκομεία.
                  </li>
                  <li>Αναγγελία νοσηλείας πριν την είσοδο στο νοσοκομείο.</li>
                </ul>
                *Το κόστος κλήσης καθορίζεται από την ισχύουσα τιμολογιακή
                πολιτική του παρόχου σας, για το 18189 βάσει του τιμολογίου
                κλήσεων προς ειδικούς αριθμούς και για το 2130318189 βάσει του
                τιμολογίου για κλήσεις προς σταθερά.
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 6}
              index={6}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Μπορώ να επιλέξω οποιοδήποτε νοσοκομείο για τη νοσηλεία μου;
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 6}>
              <p>
                Σε όλα τα προγράμματα Εθνική & Υγεία (εκτός του προγράμματος
                Προνομιακή Προστασία), η επιλογή του νοσοκομείου που θα
                νοσηλευθείτε ανήκει σε εσάς. Επιπλέον, αν επιλέξετε να
                νοσηλευθείτε σε συμβεβλημένο με την Εταιρία νοσοκομείο, σας
                παρέχονται ειδικά προνόμια όπως, κατάργηση του ποσοστού
                συμμετοχής, μείωση ή και απαλοιφή του ποσού συμμετοχής σας,
                καθώς και κάλυψη εξωνοσοκομειακών εξόδων πριν και μετά την
                νοσηλεία που σχετίζονται με αυτήν όπως, επισκέψεις σε ιατρούς,
                φάρμακα, διαγνωστικές εξετάσεις (ανάλογα με το πρόγραμμα
                ασφάλισης).
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 7}
              index={7}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Καλύπτομαι και στο εξωτερικό; Ποιες είναι οι προϋποθέσεις;
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 7}>
              <p>
                Βεβαίως, σε χώρες της Ευρωπαϊκής Ένωσης καλύπτεστε 30 ημέρες
                μετά την έναρξη της ασφαλιστικής κάλυψης όταν πρόκειται για
                ασθένεια και από την πρώτη ημέρα της ασφάλισης όταν πρόκειται
                για ατύχημα. Το ίδιο ισχύει και στις χώρες εκτός Ε.Ε. με την
                διαφορά ότι η κάλυψη ισχύει 6 μήνες μετά από την έναρξη της
                ασφαλιστικής κάλυψης όταν πρόκειται για ασθένεια. Επίσης σε
                περίπτωση χειρουργικής επέμβασης στις ΗΠΑ ή τον Καναδά τα
                ανώτατα όρια αμοιβής χειρουργών και αναισθησιολόγων
                διπλασιάζονται.
              </p>
            </Accordion.Content>
          </Accordion>
          <a
            href="https://www.ethniki-asfalistiki.gr/defaultMRB.aspx?Page=health"
            aria-label="Σύνδεσμος για πηγή κειμένου απο τη σελίδα της Εθνικής Ασφαλιστικής"
          >
            Πηγή απο τη Σελίδα τής Εθνικής Ασφαλιστικής
          </a>
        </div>
      </Layout>
    )
  }
}
