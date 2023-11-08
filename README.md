# Geo-Task-Interview

Zadanie składa się z dwóch etapów:
1.Przygotowanie API
2.Przygotowanie komponentu w Angular na bazie makiety

**API**
API powinno być przygotowane w języku Ballerina (Ballerina Home).
API powinno udostępniać 5 metod
GET /users - pobiera listę wszystkich użytkowników
GET /users/<id> - pobiera pojedynczego użytkownika o określonym identyfikatorze
POST /users - w body requesta powinien znaleźć się nowy obiekt typu User który zostanie dodany do listy użytkowników
POST /users/resetPassword - w body requesta przekazujemy email użytkownika dla którego chcemy zresetować hasło. W przypadku kiedy użytkownik z podanym email znajduje się na liście zwracamy kod odpowiedzi Accepted (202). Jeżeli użytkownika nie ma na liście zwracamy kod Bad Request (400).
POST /auth/login - w body requesta przekazujemy email oraz hasło. Jeżeli kombinacja odpowiada użytkownikowi z listy zwracamy kod odpowiedzi Ok (200). W przypadku nieprawidłowej kombinacji zwracamy kod odpowiedzi Unauthorized (401)
Lista użytkowników powinna na potrzeby testowania zawierać przynajmniej 3 predefiniowanych użytkowników.
Lista użytkowników powinna być trzymana w pamięci. Nie ma potrzeby używania żadnych baz danych ani innych źródeł.
Użytkownik to klasa która zawiera 3 pola: id,email,password.

**Frontend**
W załączniku znajduje się makieta low fidelity oraz grafiki (tło i logotyp) na bazie której należy przygotować komponent formularza logowania/rejestracji/resetu hasła
Komponent należy utworzyć wspomagając się gotowymi komponentami z biblioteki Angular Material
Logowanie - zawiera miejsce na wpisanie email, hasła, link do resetu hasła oraz przycisku do zalogowania. Uzyskanie poprawnej odpowiedzi powinno skutkować pokazaniem stosownej informacji. Podobnie w przypadku błędu 401.
Rejestracja konta - zawiera miejsce na wpisanie email (musimy walidować czy to co użytkownik wpisał faktycznie jest emailem), hasła (hasło musi składać się minimum 1 cyfry, 1 małej litery, 1 dużej litery i co najmniej 8 znaków) powtórzenie hasła (hasła muszą być zgodne) oraz przycisk załóż konto. Po poprawnym założeniu użytkownika formularz powinien przejść do widoku logowania.
Reset hasła - zawiera miejsce na wpisanie email. W przypadku poprawnej odpowiedzi wyświetlamy informację o wysłaniu wiadomości email (faktycznej obsługi wysyłki wiadomości nie potrzeba implementować).
