# Known Bugs in Cypress Challenge

This document tracks bugs found during automated testing.

---

## 1. Name Field Allows Invalid Characters
- **Bug:** The `Name` input field allows numbers and special characters.
- **Expected:** The field should only allow letters (e.g., "John Doe").
- **Steps to Reproduce:**
  1. Go to the Checkout page.
  2. Enter `12345` in the `Name` field.
  3. Submit the form.
- **Status:** *Bug still present*
- **Test Case:** `checkout.feature` → `Name field should reject invalid names`

---

## 2. Email Without a Dot is Accepted
- **Bug:** The checkout form allows emails without a dot in the domain (e.g., `user@example`).
- **Expected:** The form should reject emails missing a dot.
- **Steps to Reproduce:**
  1. Enter `user@example` in the `Email` field.
  2. Submit the form.
- **Status:** *Bug still present*
- **Test Case:** `checkout.feature` → `Email without a dot should not be accepted`

---

## 3. Cart Always Displays "Product 1"
- **Bug:** The cart always shows `"Product 1"` regardless of which product was added.
- **Expected:** The cart should display the actual product added.
- **Steps to Reproduce:**
  1. Add `"Product 2"` to the cart.
  2. Navigate to the Cart page.
  3. The cart incorrectly shows `"Product 1"`.
- **Status:** *Bug still present*
- **Test Case:** `cart.feature` → `Cart should display correct product details`

---

## 4. Cart is Never Empty
- **Bug:** The cart **always contains `"Product 1"`**, even when no items are added.
- **Expected:** The cart should be empty if no products are added.
- **Steps to Reproduce:**
  1. Open the Cart page without adding any products.
  2. `"Product 1"` is still shown.
- **Status:** *Bug still present*
- **Test Case:** `cart.feature` → `Cart should be empty if no products are added`

---

## 5. "Added to Cart" Message is Unreliable
- **Bug:** The `"Product X added to the cart!"` message disappears **too quickly** for Cypress to reliably detect.
- **Expected:** Cypress should be able to validate the message before redirection.
- **Steps to Reproduce:**
  1. Add a product to the cart.
  2. Try detecting `"Product X added to the cart!"` in the DOM.
- **Status:** *Bug still present (assertion skipped)*
- **Test Case:** `product.feature` → Assertion was skipped to prevent test failure.

---

## 6. User Remains on Checkout Page After Purchase
- **Bug:** After a successful purchase, the user **is not redirected** but instead sees a confirmation message.
- **Expected:** Redirection or explicit order summary page.
- **Steps to Reproduce:**
  1. Complete a valid purchase.
  2. Observe that the page still remains on `/checkout`.
- **Status:** *Not a bug, but unexpected behavior*
- **Test Case:** `checkout.feature` → `The purchase should be completed successfully`

---

## **Next Steps**
- Developers should **investigate these bugs** and determine if they are intentional or need fixing.
- Automated tests **have been updated** to handle these bugs where necessary.

---

## **Maintainer Notes**
- Tests are implemented in **Cypress with Cucumber (Gherkin syntax)**.
- For more details, refer to the **`integration/features/`** folder.

---

## **Note:**
This bug report serves as documentation for the **current issues** in the Cypress Challenge project.  
Once these bugs are fixed, **tests will need updates accordingly!**