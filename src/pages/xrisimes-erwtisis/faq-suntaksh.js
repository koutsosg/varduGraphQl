import React, { Component } from "react"
import { Accordion, Icon } from "semantic-ui-react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default class RetirmentFaqs extends Component {
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
          title=" Χρήσιμες Ερωτήσεις Σύνταξη"
          description="Η Εθνική Ασφαλιστική, κατανοώντας απόλυτα τις οικονομικές συνθήκες και τις απαιτήσεις του σήμερα αλλά και τις ανησυχίες για το αύριο, σχεδιάζει και προσφέρει λύσεις σε κάθε άνθρωπο που ενδιαφέρεται πραγματικά για την κάλυψη των συνταξιοδοτικών του αναγκών."
          siteUrl="https://fvardi.ohmy-gad.com/xrisimes-erwtisis/faq-suntaksh/"
        />
        <div className="px-5 text-left gray">
          <h1 className="gray pb-5 ">Χρήσιμες Ερωτήσεις Σύνταξη</h1>
          <Accordion className="text-left">
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Γιατί να κάνω ένα Συνταξιοδοτικό Πρόγραμμα;
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p>
                Για να διατηρήσετε και να εξασφαλίσετε την ποιότητα της ζωής σας
                στην ηλικία που δε θα έχετε τη δυνατότητα να αγωνίζεστε για
                αυτό! Όταν σταματήσετε να εργάζεστε, ενώ θα έχετε ακόμα μπροστά
                σας πολλά χρόνια ζωής, τα έσοδά σας πιθανά να περιορίζονται μόνο
                στη σύνταξη, που θα’ναι μικρότερη από το εισόδημα που είχατε
                όταν εργαζόσασταν. Φροντίστε, λοιπόν, το μέλλον σας
                προσδιορίζοντας από σήμερα - σύμφωνα με τις δυνατότητές σας -
                την ηλικία και το ποσό που επιθυμείτε, για να απολαμβάνετε στο
                μέλλον όσα δικαιούστε! Με τα προγράμματα της Εθνικής
                Ασφαλιστικής μπορείτε να εξασφαλίσετε ένα υψηλό βιοτικό επίπεδο
                και μετά τη συνταξιοδότησή σας, με ευελιξία και προσιτό
                ασφάλιστρο.
              </p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Με αφορά το θέμα της Σύνταξης;
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p>
                Ένα Συνταξιοδοτικό πρόγραμμα απευθύνεται σε εσάς που θέλετε να
                συμπληρώσετε το εισόδημά σας όταν συνταξιοδοτηθείτε και σε εσάς
                που πρόκειται να συνταξιοδοτηθείτε σύντομα. Γενικότερα, τα
                Συνταξιοδοτικά προγράμματα της Εθνικής Ασφαλιστικής απευθύνονται
                σε όσους ανησυχούν έντονα για την κάλυψη των αναγκών τους όταν
                συνταξιοδοτηθούν και δεν έχουν την οικονομική δυνατότητα να
                αποταμιεύουν σήμερα μεγάλα ποσά.
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
              Είμαι πολύ νέος για να σκεφτώ τώρα τη Σύνταξή μου;
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <p>
                Αυτή είναι μια παγίδα που κοστίζει πολύ! Όσο αναβάλλετε να
                συνάψετε ένα Συνταξιοδοτικό Πρόγραμμα σήμερα, τόσο πιο μεγάλο θα
                είναι το κόστος του για εσάς μελλοντικά. Αντίθετα, όσο πιο νέος
                ξεκινήσετε, θα πληρώσετε λιγότερα χρήματα, εξασφαλίζοντας
                μεγαλύτερα κεφάλαια και υψηλότερη απόδοση.
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 3}
              index={3}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Πρέπει να περιμένω μέχρι τα 65 μου για να συνταξιοδοτηθώ;
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
              <p>
                Με τα προγράμματα της Εθνικής Ασφαλιστικής το πότε θα πάρετε
                Σύνταξη το επιλέγετε εσείς! Σχεδιάζετε, λοιπόν, το προσωπικό σας
                συνταξιοδοτικό πλάνο, φροντίζοντας από σήμερα για το μέλλον σας,
                ώστε να καλύπτετε τις ανάγκες σας με τον καλύτερο τρόπο.{" "}
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 4}
              index={4}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Κάνοντας σήμερα ένα Συνταξιοδοτικό Πρόγραμμα, πότε θα πάρω τη
              Μηνιαία Σύνταξή μου;
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 4}>
              <p>
                Με την Εθνική Ασφαλιστική έχετε τη δυνατότητα να επιλέγετε εσείς
                τη χρονική στιγμή που επιθυμείτε να ξεκινήσει η καταβολή της
                μηνιαίας Σύνταξής σας. Μάλιστα, εάν σήμερα είστε άνω των 50 ετών
                και διαθέτετε κάποιο εφάπαξ ποσό που θέλετε να το αξιοποιήσετε,
                η Εθνική Ασφαλιστική διαθέτει Πρόγραμμα με το οποίο μπορείτε να
                συνταξιοδοτηθείτε από τον επόμενο κιόλας μήνα.{" "}
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 5}
              index={5}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Κάθε πότε μπορώ να πληρώνω τα ασφάλιστρά μου;
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 5}>
              <p>
                Μπορείτε να πληρώνετε τα ασφάλιστρα σύμφωνα με τον οικονομικό
                σας προγραμματισμό. Ανάλογα με την επιλογή σας, μπορείτε να
                καταβάλλετε τα ασφάλιστρα ετησίως, εξαμηνιαίως, τριμηνιαίως ή
                μηνιαίως, ενώ αν επιλέξετε το Νέο Συνταξιοδοτικό Πρόγραμμα
                ΕΘΝΙΚΗ ΣΥΝΤΑΞΗ έχετε επιπλέον τη δυνατότητα να ενισχύετε τη
                μελλοντική εγγυημένη παροχή σας μέσω έκτακτων καταβολών.
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 6}
              index={6}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Τι μου προσφέρει ένα Συνταξιοδοτικό Πρόγραμμα της Εθνικής
              Ασφαλιστικής;
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 6}>
              <p>
                Η Εθνική Ασφαλιστική, κατανοώντας απόλυτα τις οικονομικές
                συνθήκες και τις απαιτήσεις του σήμερα αλλά και τις ανησυχίες
                για το αύριο, σχεδιάζει και προσφέρει λύσεις σε κάθε άνθρωπο που
                ενδιαφέρεται πραγματικά για την κάλυψη των συνταξιοδοτικών του
                αναγκών. Μερικά μόνο από τα οφέλη που σας προσφέρει ένα
                Συνταξιοδοτικό Πρόγραμμα της Εθνικής Ασφαλιστικής είναι τα εξής:
                <ol>
                  <li>
                    διατήρηση ενός καλού βιοτικού επιπέδου ισοβίως, χωρίς να
                    αλλάξετε συνήθειες και τρόπο ζωής όταν συνταξιοδοτηθείτε,
                  </li>
                  <li>
                    {" "}
                    εγγύηση με την αξιοπιστία και τη φερεγγυότητα της Εθνικής
                    Ασφαλιστικής,
                  </li>
                  <li>
                    ελευθερία στην επιλογή των παροχών του προγράμματός σας,
                  </li>
                  <li>
                    προσαρμογή του προγράμματος στις οικονομικές σας
                    δυνατότητες,
                  </li>
                  <li>εξασφάλιση των αγαπημένων σας προσώπων,</li>
                  <li>
                    διατήρηση οικονομικής ανεξαρτησίας και αξιοπρέπειας κατά την
                    τρίτη ηλικία και εκπλήρωση των ονείρων σας, ακριβώς όταν θα
                    έχετε χρόνο να τα πραγματοποιήσετε.
                  </li>
                </ol>
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
