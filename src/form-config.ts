/**
 * Contact form delivery settings.
 *
 * The form posts its submission to CONTACT_ENDPOINT on this same origin. The
 * front end is finished; what remains is a Cloudflare Worker route that
 * receives the POST and sends the email.
 *
 * ---------------------------------------------------------------------------
 * Contract the Worker route must satisfy
 * ---------------------------------------------------------------------------
 * Request   POST /api/contact
 *           Content-Type: application/json
 *
 *           {
 *             "name":     "Cafer Bakac",                  // required
 *             "company":  "Mia Consultancy",              // may be empty
 *             "email":    "someone@example.com",          // required
 *             "message":  "…",                            // required
 *             "subject":  "New enquiry from the …",       // set per language
 *             "consent":  true,                            // privacy checkbox
 *             "botcheck": ""                               // honeypot, see below
 *           }
 *
 * Response  Success: HTTP 2xx with a JSON body of {"success": true}
 *           Failure: any non-2xx status, or a body without success:true
 *
 * Both outcomes are already handled in the UI: success clears the form and
 * shows a confirmation, failure shows an error naming CONTACT_EMAIL so the
 * visitor always has a way through.
 *
 * Spam: `botcheck` is a hidden field no human can see. If it arrives with any
 * value the submission is from a bot; the Worker should drop it and still
 * return success, so the bot learns nothing. Rate limiting and any origin
 * check belong in the Worker too, since anything in the browser can be forged.
 *
 * Note that until that route exists, submissions will return the site's 404 and
 * the visitor will see the error message. Deploy the Worker before, or with,
 * this front end.
 */
export const CONTACT_ENDPOINT = '/api/contact';

/** Shown to visitors as the direct route, and named when a submission fails. */
export const CONTACT_EMAIL = 'info@miaconsultancy.com';
