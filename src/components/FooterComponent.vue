<template>
  <footer class="bg-dark text-white py-4">
    <div class="container d-flex flex-wrap justify-content-between">
      <!-- الشعار والمحتوى الأول -->
      <div class="col-12 col-md-3 mb-3">
        <h3 class="fw-bold">Scent Haven</h3>
        <p>Your premier destination for luxury fragrances.</p>
        <div class="social d-flex gap-3">
          <i class="bi bi-facebook icon"></i>
          <i class="bi bi-twitter icon"></i>
          <i class="bi bi-instagram icon"></i>
        </div>
      </div>

      <!-- الروابط السريعة -->
      <div class="col-12 col-md-3 mb-3">
        <h5 class="fw-bold">Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="/" class="text-white">Home</a></li>
          <li><a href="/shop" class="text-white">Shop</a></li>
          <li><a href="/new-arrivals" class="text-white">New Arrivals</a></li>
          <li><a href="/best-sellers" class="text-white">Best Sellers</a></li>
          <li><a href="/gift-sets" class="text-white">Gift Sets</a></li>
        </ul>
      </div>

      <!-- خدمة العملاء -->
      <div class="col-12 col-md-3 mb-3">
        <h5 class="fw-bold">Customer Services</h5>
        <ul class="list-unstyled">
          <li><a href="/contact" class="text-white">Contact Us</a></li>
          <li><a href="/faq" class="text-white">FAQs</a></li>
          <li>
            <a href="/shipping-policy" class="text-white">Shipping Policy</a>
          </li>
          <li><a href="/returns" class="text-white">Returns - Exchange</a></li>
          <li>
            <a href="/privacy-policy" class="text-white">Privacy Policy</a>
          </li>
        </ul>
      </div>

      <!-- الاشتراك في النشرة البريدية -->
      <div class="col-12 col-md-3 mb-3">
        <h5 class="fw-bold">Newsletter</h5>
        <p>Subscribe to get updates on new arrivals and special offers.</p>
        <button class="btn btn-outline-light">Subscribe</button>
        <p><i class="bi bi-envelope"></i> support@scenthaven.com</p>
      </div>
    </div>

    <!-- الفوتر السفلي مع حقوق الملكية -->
    <div class="d-flex justify-content-between align-items-center py-3">
      <p class="mb-0">
        <i class="bi bi-c-circle-fill"></i> 2025 Scent Haven. All rights
        reserved.
      </p>
      <div class="payment d-flex gap-3">
        <i class="bi bi-paypal fs-3"></i>
        <i class="bi bi-credit-card-2-back-fill fs-3"></i>
        <i class="bi bi-wallet-fill fs-3"></i>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style scoped>
footer {
  background-color: #343a40;
}

.icon {
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.icon:hover {
  color: #e83e8c;
}

a {
  text-decoration: none;
  color: whitesmoke;
  transition: color 0.3s ease;
}

a:hover {
  color: #e83e8c;
}

button {
  background-color: #e83e8c;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #d23f68;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: flex-start;
  }

  .col-md-3 {
    width: 100%;
  }
}
</style>
