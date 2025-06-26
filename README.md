# Rabbitmq
Basic Rabbbitmq service connection 
# 🐇 RabbitMQ Messaging Demo

Bir mesaj kuyruğu sistemi oluşturmayı amaçlayan bu proje, **RabbitMQ** kullanarak asenkron mesajlaşma senaryolarını öğrenmek ve uygulamak üzere tasarlanmıştır.

## 🚀 Proje Özeti

- **Producer**: Mesaj üretir ve belirli bir **exchange** üzerinden kuyruğa yollar.
- **Exchange**: Mesajları, türüne göre doğru kuyruklara yönlendirir.
- **Queue**: Mesajları alır ve depolar.
- **Consumer**: Kuyruktan mesajları alır ve işler.

Bu mimari ile üretici (producer) ile tüketici (consumer) birbirinden bağımsız çalışabilir ve mesajlar güvenli bir şekilde iletilir.

---

## 🛠️ Kullanılan Teknolojiler

- **RabbitMQ** (Docker veya local kurulum)
- Kullanılan dil ve kütüphaneler:
  - Java + Spring Boot (Spring AMQP)
  - _veya_ Node.js (`amqplib`)
  - _veya_ Python (`pika`)
- Docker Compose (RabbitMQ kurulumu için)

---

## 🧩 Özellikler

- Basic exchange + queue + binding kurulumu
- **Direct / Topic / Fanout** exchange türlerini kullanarak routing
- Durable queue ve persistent mesaj kullanımı
- Acknowledgement ile mesaj güvenliği
- Hatalı mesajları yakalamak için **Dead Letter Queue (DLQ)** yapısı

---

## 📦 Kurulum & Çalıştırma

1. Reposu klonla:
   ```bash
   git clone https://github.com/SudeNurErturk/Rabbitmq.git
   cd Rabbitmq
